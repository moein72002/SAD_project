import pandas as pd

file_name = './backend/original_csv_file/Locations.csv'
# Read the Excel file
df = pd.read_csv(file_name)

# Print the top 5 rows
print(df)
