import math
import random
import uuid
import numpy as np
from datetime import date, timedelta
from persiantools.jdatetime import JalaliDate

from faker import Faker
from datetime import datetime, timedelta
import csv
import pandas as pd
import jdatetime

fake = Faker()



# Helper functions
def hash_password(password):
    return password


def solar_to_gregorian(solar_date):
    print(type(solar_date))
    year, month, day = map(int, solar_date.split('/'))

    # Create a JalaliDate object
    jalali_date = JalaliDate(year, month, day)

    # Convert to Gregorian date
    return jalali_date.to_gregorian()
def random_solar_date(start_year, end_year):
# Generate a random year, month, and day within the specified range
    year = random.randint(start_year, end_year)
    month = random.randint(1, 12)
    day = random.randint(1, 29 if month <= 6 else 30)
    random_date = jdatetime.date(year, month, day)
    return random_date.strftime('%Y/%m/%d')


def random_date(start, end):
    return start + timedelta(
    seconds=random.randint(0, int((end - start).total_seconds())),
    )
def load_csv(filename):
    df = pd.read_csv(filename)
    return df.to_dict(orient='records')

# Generate Admin data
admins = []
for counter in range(5):
    admins.append({
        'id': counter,
        'first_name': fake.first_name(),
        'last_name': fake.last_name(),
        'national_id': fake.unique.numerify(text='##########'),
        'phone_number': fake.unique.phone_number(),
        'email': fake.unique.email(),
        'password': hash_password(fake.password()),
        'role': 'admin'
    })

current_address = './'
# Assuming Location data is loaded from Location.csv
locations = load_csv(f'{current_address}/Locations.csv')  # This should be a function that reads the CSV file
# services = load_csv(f'{current_address}/Services.csv')# This should be a function that reads the CSV file
services = pd.read_csv(f'{current_address}/Services.csv')
column_name = 'ردیف'
column_to_remove = 'ﻣﺑﻠﻎ ﻧﮭﺎﯾﯽ'
part_to_remove = 'Rial '
services.dropna(subset=[column_name], inplace=True)
services[column_to_remove] = services[column_to_remove].str.replace(part_to_remove, '')
services.to_csv('Services.csv', index=False)


# drugs = load_csv(f'{current_address}/Drugs.csv')  # This should be a function that reads the CSV file

drugs = pd.read_csv(f'{current_address}/Drugs.csv')
drugs['drug_id'] = [str(uuid.uuid4()) for _ in range(len(drugs))]
# drugs = drugs.drop('Date', axis=1)
# print(drugs['Date'])
# drugs['Date'].fillna(random_solar_date(1399, 1403), inplace=True)
# drugs['Date'] = drugs['Date'].apply(solar_to_gregorian)
drugs['new_date'] = [fake.date_between(start_date='-4y', end_date='+5y') for _ in range(len(drugs))]

drugs.to_csv('Drugs.csv', index=False)

# Generate Charity data
charities = []
charity_ids = []
counter = 0
top_5_cities = sorted(locations, key=lambda x: x['Sum of population'], reverse=True)[:5]
for location in top_5_cities:
    num_charities = random.randint(1, 10)
    for _ in range(num_charities):
        counter += 1
        charity = {
            'id': counter,
            'name': fake.company(),
            'phone_number': fake.unique.phone_number(),
            'address': fake.address(),
            'location_id': location['Location_id'],
            'created_at': fake.date_between(start_date= date.today() - timedelta(days=6*30), end_date= date.today() - timedelta(days=2*30))
        }
        charities.append(charity)
        charity_ids.append(charity['id'])

# Generate CharityEmployee data
charity_employees = []
counter = 0
for charity_id in charity_ids:
    num_employees = random.randint(2, 10)
    for _ in range(num_employees):
        counter += 1
        charity_employees.append({
            'id': counter,
            'charity_id': charity_id,
            'first_name': fake.first_name(),
            'last_name': fake.last_name(),
            'national_id': fake.unique.numerify(text='##########'),
            'phone_number': fake.unique.phone_number(),
            'email': fake.unique.email(),
            'password': hash_password(fake.password())
        })

# Generate Doctor data
doctors = []
doctor_majors = ['Dentistry', 'Oral Surgery', 'Orthodontics', 'Endodontics', 'Periodontics']
for counter in range(500):
    doctors.append({
        'id': counter + 1,
        'first_name': fake.first_name(),
        'last_name': fake.last_name(),
        'doctor_code': fake.unique.bothify(text='????-#####'),
        'major': random.choice(doctor_majors),
        'specialty': fake.job(),
        'phone_number': fake.unique.phone_number(),
        'email': fake.unique.email(),
        'password': hash_password(fake.password()),
        'address': fake.address(),
        'location_id': random.choice(locations)['Location_id'],
        'created_at': fake.date_between(start_date= date.today() - timedelta(days=6*30), end_date= date.today() - timedelta(days=2*30))

    })

# Generate DoctorFreeTime data
doctor_free_times = []
counter = 0
for doctor in doctors:
    for month_offset in [-2, -1, 0, 1]:
        start_date = datetime.today().replace(day=1) + timedelta(days=month_offset*30)
        end_date = start_date + timedelta(days=30)
        num_free_times = random.randint(10, 20)
        for _ in range(num_free_times):
            counter += 1
            date = fake.date_between(start_date=start_date, end_date=end_date)
            hour = random.randint(8, 21)
            minute = random.choice([0, 30])
            start_time = f"{hour:02d}:{minute:02d}:00"
            end_time = (datetime.strptime(start_time, '%H:%M:%S') + timedelta(minutes=30)).strftime('%H:%M:%S')
            doctor_free_times.append({
                'id': counter,
                'doctor_id': doctor['id'],
                'date': date,
                'start_time': start_time,
                'finish_time': end_time
            })

# Generate DoctorVisit data (90% of DoctorFreeTime records)
doctor_visits = []
patients = []
patient_ids = []
doctor_visit_ids = []
start_date = datetime(2020, 1, 1)
end_date = datetime(2024, 12, 31)
counter = 0
for charity_id in charity_ids:
    num_patients = random.randint(10, 50)
    for _ in range(num_patients):
        counter += 1
        patient = {
            'id': counter,
            'charity_id': charity_id,
            'first_name': fake.first_name(),
            'last_name': fake.last_name(),
            'national_id': fake.unique.numerify(text='##########'),
            'birthdate': fake.date_of_birth(minimum_age=7, maximum_age=16),
            'sex': random.choice(['male', 'female']),
            'created_at': fake.date_between(start_date= date.today() - timedelta(days=6*30), end_date= date.today() - timedelta(days=2*30))

        }
        patients.append(patient)
        patient_ids.append(patient['id'])


doctor_visits_counter = 0
for free_time in random.sample(doctor_free_times, int(len(doctor_free_times) * 0.9)):
    doctor_visits_counter += 1
    doctor_visits.append({
        'id': doctor_visits_counter,
        'fact_doctor_free_time_id': free_time['id'],
        'patient_id': random.choice(patient_ids),
        'service_id': random.randint(1, 100),  # Assuming 100 services
        'tooth_number': random.randint(1, 32),
        'is_reminded': fake.boolean()
    })
    doctor_visit_ids.append(doctor_visits_counter)

# Generate RadiologyCenter data
radiology_centers = []
radiology_center_ids = []
counter = 0
for location in top_5_cities:
    num_centers = random.randint(1, 10)
    for _ in range(num_centers):
        counter += 1
        center = {
            'id': counter,
            'name': fake.company(),
            'code': fake.unique.bothify(text='RC-#####'),
            'phone_number': fake.unique.phone_number(),
            'address': fake.address(),
            'location_id': location['Location_id'],
            'created_at': fake.date_between(start_date= date.today() - timedelta(days=6*30), end_date= date.today() - timedelta(days=2*30))
        }
        radiology_centers.append(center)
        radiology_center_ids.append(center['id'])

# Generate RadiologyCenterEmployee data
radiology_center_employees = []
counter = 0
for center_id in radiology_center_ids:
    num_employees = random.randint(2, 5)
    for _ in range(num_employees):
        counter += 1
        radiology_center_employees.append({
            'id': counter,
            'radiology_center_id': center_id,
            'first_name': fake.first_name(),
            'last_name': fake.last_name(),
            'national_id': fake.unique.numerify(text='##########'),
            'phone_number': fake.unique.phone_number(),
            'password': hash_password(fake.password())
        })

# Generate RadiologyCenterFreeTime data
radiology_center_free_times = []
counter = 0
for center in radiology_centers:
    for month_offset in [-2, -1, 0, 1]:
        start_date = datetime.today().replace(day=1) + timedelta(days=month_offset*30)
        end_date = start_date + timedelta(days=30)
        num_free_times = random.randint(10, 20)
        for _ in range(num_free_times):
            counter += 1
            date = fake.date_between(start_date=start_date, end_date=end_date)
            hour = random.randint(8, 21)
            minute = random.choice([0, 30])
            start_time = f"{hour:02d}:{minute:02d}:00"
            end_time = (datetime.strptime(start_time, '%H:%M:%S') + timedelta(minutes=30)).strftime('%H:%M:%S')
            radiology_center_free_times.append({
                'id': counter,
                'radiology_center_id': center['id'],
                'date': date,
                'start_time': start_time,
                'finish_time': end_time
            })

# Generate RadiologyCenterVisit data (30% of DoctorVisit records)
radiology_center_visits = []
counter = 0
for visit in random.sample(doctor_visits, int(len(doctor_visits) * 0.3)):
    free_time = random.choice(radiology_center_free_times)
    counter += 1
    radiology_center_visits.append({
        'id': counter,
        'fact_radiology_center_free_time_id': free_time['id'],
        'doctor_visit_id': visit['id'],
        'opg_image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzhtR5tILVEfdlmp6puYz9SU7P8jN6ulM6Q&usqp=CAU',
        'is_reminded': fake.boolean()
    })

# Generate SystemSecretary data
system_secretaries = []
counter = 0
for location in locations:
    counter += 1
    system_secretaries.append({
        'id': counter,
        'first_name': fake.first_name(),
        'last_name': fake.last_name(),
        'national_id': fake.unique.numerify(text='##########'),
        'phone_number': fake.unique.phone_number(),
        'email': fake.unique.email(),
        'password': hash_password(fake.password()),
        'location_id': location['Location_id']
    })
prescriptions = []
drug_id_list = drugs['drug_id'].tolist()
for counter in range(100):
    prescriptions.append({
        'id' : counter,
        'doctor_visit_id' : random.choice(doctor_visit_ids),
        'drug_id' : random.choice(drug_id_list)
    })

# Functions to write data to CSV
def write_csv(filename, fieldnames, rows):
    with open(f"{current_address}/generated_csv_files/{filename}", mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

# Writing data to CSV files
write_csv('Admin.csv', ['id', 'first_name', 'last_name', 'national_id', 'phone_number', 'email', 'password', 'role'], admins)
write_csv('Charity.csv', ['id', 'name', 'phone_number', 'address', 'location_id','created_at'], charities)
write_csv('CharityEmployee.csv', ['id', 'charity_id', 'first_name', 'last_name', 'national_id', 'phone_number', 'email', 'password'], charity_employees)
write_csv('Doctor.csv', ['id', 'first_name', 'last_name', 'doctor_code', 'major', 'specialty', 'phone_number', 'email', 'password', 'address', 'location_id','created_at'], doctors)
write_csv('DoctorFreeTime.csv', ['id', 'doctor_id', 'date', 'start_time', 'finish_time'], doctor_free_times)
write_csv('DoctorVisit.csv', ['id', 'fact_doctor_free_time_id', 'patient_id', 'service_id', 'tooth_number', 'is_reminded'], doctor_visits)
write_csv('Patient.csv', ['id', 'charity_id', 'first_name', 'last_name', 'national_id', 'birthdate', 'sex','created_at'], patients)
write_csv('RadiologyCenter.csv', ['id', 'name', 'code', 'phone_number', 'address', 'location_id','created_at'], radiology_centers)
write_csv('RadiologyCenterEmployee.csv', ['id', 'radiology_center_id', 'first_name', 'last_name', 'national_id', 'phone_number', 'password'], radiology_center_employees)
write_csv('RadiologyCenterFreeTime.csv', ['id', 'radiology_center_id', 'date', 'start_time', 'finish_time'], radiology_center_free_times)
write_csv('RadiologyCenterVisit.csv', ['id', 'fact_radiology_center_free_time_id', 'doctor_visit_id', 'opg_image', 'is_reminded'], radiology_center_visits)
write_csv('SystemSecretary.csv', ['id', 'first_name', 'last_name', 'national_id', 'phone_number', 'email', 'password', 'role', 'location_id'], system_secretaries)
write_csv('Prescription.csv',['id', 'doctor_visit_id', 'drug_id'], prescriptions)

