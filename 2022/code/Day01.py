def most_calories(calories):
  # Create a list to hold the total Calories for each Elf
  elf_totals = []
  # Keep track of the current Elf's total Calories
  current_total = 0
  # Loop through the list of Calories
  for calorie in calories:
    # If the current item is a blank line, add the current Elf's total to the list
    # of Elf totals and reset the current total to 0
    if calorie == "\n":
      elf_totals.append(current_total)
      current_total = 0
    # If the current item is not a blank line, add its Calories to the current Elf's total
    else:
      current_total += int(calorie)
  # Add the final Elf's total to the list of Elf totals
  elf_totals.append(current_total)
  
  # Sort the list of Elf totals in descending order
  elf_totals.sort(reverse=True)
  
  # Calculate the total Calories carried by the top three Elves
  top_three_total = elf_totals[0] + elf_totals[1] + elf_totals[2]

  # Return the total Calories carried by the top three Elves
  return top_three_total

# import the os module
import os

# get the current working directory
current_dir = os.getcwd()

# change the current working directory to the parent folder of the current directory
os.chdir(os.path.dirname(current_dir))
parent_dir = os.getcwd()

# navigate into the 'input' folder
os.chdir(os.path.join(parent_dir, "input"))

# Open the file and read its contents into a list
with open("Input01.txt") as file:
  calories = file.readlines()

top_three_total = most_calories(calories)
print(top_three_total)
