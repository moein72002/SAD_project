from persiantools.jdatetime import JalaliDate

# Solar date in Persian calendar (1397/02/30)
solar_date = "1403/04/07"

# Split the date string into components
year, month, day = map(int, solar_date.split('/'))

# Create a JalaliDate object
jalali_date = JalaliDate(year, month, day)

# Convert to Gregorian date
gregorian_date = jalali_date.to_gregorian()

# Print the Gregorian date
print(f"The Gregorian date for {solar_date} is {gregorian_date.strftime('%m/%d/%Y')}")
