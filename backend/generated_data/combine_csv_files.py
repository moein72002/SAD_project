import os
import pandas as pd

# Define the folder containing the CSV files and the output Excel file name
current_address = './backend/generated_data'
folder_path = f'{current_address}/generated_csv_files'
output_file = f'{current_address}/data.xlsx'

# Create a Pandas Excel writer using openpyxl as the engine
writer = pd.ExcelWriter(output_file, engine='openpyxl')

# Loop through all CSV files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith('.csv'):
        # Create the full file path
        file_path = os.path.join(folder_path, filename)
        # Read the CSV file into a DataFrame
        df = pd.read_csv(file_path)
        # Use the file name (without extension) as the sheet name
        sheet_name = os.path.splitext(filename)[0]
        # Write the DataFrame to the Excel file
        df.to_excel(writer, sheet_name=sheet_name, index=False)

# Save the Excel file
writer._save()

print(f'All CSV files have been combined into {output_file}')
