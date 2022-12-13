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
with open("Input03.txt") as file:
  rucksacks = file.readlines()

priority_sum = 0

# iterate over rucksacks
for rucksack in rucksacks:
    # find common letters
    common_letters = set(rucksack[:len(rucksack) // 2]).intersection(set(rucksack[len(rucksack) // 2:]))
    # add priority of common letter to sum
    for letter in common_letters:
        priority_sum += ord(letter) - ord('a') + 1 if letter.islower() else ord(letter) - ord('A') + 27

print(priority_sum)
