from datetime import datetime

now = datetime.now()

time_dict = {
    "Year": now.year,
    'Month': now.month,
    'Day': now.day,
    'Hour': now.hour,
    'Minute': now.minute,
    'Second': now.second
}

print(time_dict)