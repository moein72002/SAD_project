import os
import pandas as pd
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import psycopg2
from psycopg2 import sql

# Load environment variables from .env file
load_dotenv()

# Database connection parameters from .env
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASS')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')
db_name = os.getenv('DB_NAME')

# Path to the folder containing the CSV files
folder_path = os.getenv('CSV_FOLDER')

# Create a connection to the PostgreSQL database
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

ordered_csv_file_names = [
    'Locations.csv',
    'Admins.csv',
    'Services.csv',
    'Charities.csv',
    'Doctors.csv',
    'RadiologyCenters.csv',
    'Patients.csv',
    'CharityEmployees.csv',
    'SystemSecretaries.csv',
    'DoctorFreeTimes.csv',
    'RadiologyCenterFreeTimes.csv',
    'DoctorVisits.csv',
    'Drugs.csv',
    'Prescriptions.csv',
    'RadiologyCenterVisits.csv',
    'RadiologyCenterEmployees.csv'
]

# Iterate over all files in the folder
for filename in ordered_csv_file_names:
    if filename.endswith('.csv'):
        # Extract the table name from the filename (without the .csv extension)
        table_name = os.path.splitext(filename)[0]

        # Truncate the table if it exists
        with engine.connect() as conn:
            conn.execute(text(f'TRUNCATE TABLE "{table_name}" CASCADE'))

        # Read the CSV file into a DataFrame
        file_path = os.path.join(folder_path, filename)
        df = pd.read_csv(file_path)

        # Write the DataFrame to the corresponding table in the PostgreSQL database
        df.to_sql(table_name, engine, if_exists='append', index=False)

        print(f'Successfully imported {filename} into table {table_name}')
print('All CSV files have been imported successfully')

# Reset sequences for all tables
with engine.connect() as conn:
    for filename in ordered_csv_file_names:
        if filename.endswith('.csv'):
            table_name = os.path.splitext(filename)[0]
            
            # Fetch the maximum ID in the table
            result = conn.execute(text(f'SELECT MAX(id) FROM "{table_name}"'))
            max_id = result.scalar()
            
            if max_id is not None:
                # Reset the sequence for the table
                sequence_name = f'{table_name}_id_seq'
                conn.execute(text(f"SELECT setval(pg_get_serial_sequence('\"{table_name}\"', 'id'), {max_id})"))
                print(f'Reset sequence for table {table_name} to {max_id}')

print('All CSV files have been imported successfully and sequences have been reset.')


# Database connection parameters
db_params = {
    'dbname': db_name,
    'user': db_user,
    'password': db_password,
    'host': db_host,
    'port': db_port
}

# SQL commands
create_function_sql = """
CREATE OR REPLACE FUNCTION calculate_age() RETURNS TRIGGER AS $$
BEGIN
    NEW.age = DATE_PART('year', AGE(NEW.birthdate));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
"""

create_trigger_sql = """
CREATE TRIGGER update_age
BEFORE INSERT OR UPDATE ON "Patients"
FOR EACH ROW
EXECUTE FUNCTION calculate_age();
"""

add_age_column_sql = """
ALTER TABLE "Patients" ADD COLUMN age INT;
"""

update_existing_rows_sql = """
UPDATE "Patients" SET age = DATE_PART('year', AGE(birthdate));
"""

# Connect to the database
conn = psycopg2.connect(**db_params)
cur = conn.cursor()

# Add the age column
cur.execute(add_age_column_sql)
conn.commit()

# Create the function
cur.execute(create_function_sql)
conn.commit()

# Create the trigger
cur.execute(create_trigger_sql)
conn.commit()

# Update existing rows
cur.execute(update_existing_rows_sql)
conn.commit()

# Close the connection
cur.close()
conn.close()

print("Age column added, trigger created, and existing rows updated successfully.")