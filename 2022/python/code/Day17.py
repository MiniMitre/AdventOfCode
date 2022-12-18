from Read_From_Website import inputText

testText = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"

#Split the text by each new line character
splitTextArray = inputText.splitlines()

#ASCI art of the game (for demonstration)
wall = "|"
emptySpace = "."
fallingRock = "@"
landedRock = "#"
Floor = "-"
floorCorner = "+"

#5 rock types


#Initialise game parameters
tower_width = 7
spawn_distance_from_left_edge = 2
spawn_height_adj = 3
jet_pattern = inputText

#Updating after each round
current_max_height = 0

#Draw inital state of game
drawFloor = floorCorner + Floor*tower_width + floorCorner
draw
