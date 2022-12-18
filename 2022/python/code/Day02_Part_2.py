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
with open("Input02.txt") as file:
  strategy_guide = file.readlines()

# A dictionary mapping each hand shape to its corresponding score
HAND_SHAPES = {
  "A": 1,  # Rock
  "B": 2,  # Paper
  "C": 3   # Scissors
}

# A dictionary mapping each desired outcome to its corresponding score
DESIRED_OUTCOMES = {
  "X": 0,  # Lose
  "Y": 3,  # Draw
  "Z": 6   # Win
}


def get_total_score(strategy_guide):
  # Initialize the total score to 0
  total_score = 0
  
  # Loop through the strategy guide and calculate the total score
  for line in strategy_guide:
    # Split the line into two columns
    opponent_shape, desired_outcome = line.strip().split()
    
    # Convert the opponent's hand shape to its corresponding score
    opponent_score = HAND_SHAPES[opponent_shape]

    #Win
    if desired_outcome == "Z":
      your_score = opponent_score % 3 + 1
    #Lose
    elif desired_outcome == "X":
      your_score = (opponent_score - 2) % 3 + 1
    #Draw
    else:
      your_score = opponent_score


    # Add the score for the round to the total score
    total_score += your_score + DESIRED_OUTCOMES[desired_outcome]
  
  # Return the total score
  return total_score


# Calculate the total score
total_score = get_total_score(strategy_guide)

# Print the total score
print(total_score)
