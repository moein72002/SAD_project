import os

def write_js_contents_to_txt(folder_path, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for filename in os.listdir(folder_path):
            if filename.endswith('.js'):
                file_path = os.path.join(folder_path, filename)
                with open(file_path, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                    outfile.write(f"{filename}:\n")
                    outfile.write(f"{content}\n\n")

# Example usage
folder_path = './backend/models'  # Replace with the path to your folder
output_file = './backend/output.txt'  # Replace with the desired output file name
write_js_contents_to_txt(folder_path, output_file)
