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
OPPONENT_HAND_SHAPES = {
  "A": 1,  # Rock
  "B": 2,  # Paper
  "C": 3   # Scissors
}

YOUR_HAND_SHAPES = {
  "X": 1,  # Rock
  "Y": 2,  # Paper
  "Z": 3   # Scissors
}

# The score for each outcome of a round
OUTCOME_SCORES = {
  "win": 6,
  "draw": 3,
  "lose": 0
}

def get_total_score(strategy_guide):
  # Initialize the total score to 0
  total_score = 0
  
  # Loop through the strategy guide and calculate the total score
  for line in strategy_guide:
    # Split the line into two columns
    opponent_shape, your_shape = line.strip().split()
    
    # Convert the opponent's hand shape to its corresponding score
    opponent_score = OPPONENT_HAND_SHAPES[opponent_shape]

    # Convert your hand shape to its corresponding score
    your_score = YOUR_HAND_SHAPES[your_shape]
    
    # Calculate the outcome of the round
    if opponent_score == your_score:
      outcome = "draw"
    elif your_score - opponent_score % 3 == 1:
      outcome = "win"
    else:
      outcome = "lose"
      
    # Add the score for the round to the total score
    total_score += your_score + OUTCOME_SCORES[outcome]
  
  # Return the total score
  return total_score


# Calculate the total score
total_score = get_total_score(strategy_guide)

# Print the total score
print(total_score)
