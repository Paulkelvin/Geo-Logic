# Instant geographic data manipulation

The Traversing section of this app is a web-based tool containing two functionalities:

## firstTable(calculating coordinates and deltaX & Y)

It allows users to calculate the coordinates of points based on the input of coordinates of the starting point, then distances and bearings of the next point which is the end point and displays the result on the end point. Subsequently, this table assumes the calculated coordinate as the parameter for start point to calculate the coordinate of the next point. This tool can be used in fields such as surveying and cartography, as well as in educational settings.

## secondTable(calculating bearing, distance and deltaX & Y)

It allows the user compute for distance, bearing, deltaEasting and deltaNorthing between two points, It uses the last two entry of coordinates to solve for the parameters mentioned earlier and displays the result on the most recent row with a coordinate value.

### Features(first & second Table)

Toggle button to switch between functional tables
Add and remove rows from the table
Automatically calculate and display the coordinates of each point based on the input of distances and bearings and coordinate of start point
Display the change in X and Y values between each point

## Usage(First Table)

### To use the **First Table**, follow these steps:

- Enter the coordinates(easting and northing) for the start point
- Click the "Add Row" button to add a new row to the table.
- Enter the distance and bearing values for the second point in the table using the next row.
- The Table will automatically calculate and displays the coordinates and change in easting and northing of the second point based on these input made.
- Repeat steps 1-3 for as many points as needed.
- Use the "Remove Row" button to remove any unnecessary rows.
- Use the "Clear data" button to clear all data from the table.

## Usage(Second Table)

### To use the **Second Table**, follow these steps:

- Enter the coordinates(easting and northing) for the start point
- Click the "Add Row" button to add a new row to the table.
- Enter the coordinates(easting and northing) for the next row which is the relative end point to the start point.
- The Table will instantly calculate and display the bearing, distance, change in easting and northing of the end point based on these input made.
- Repeat steps 1-3 for as many points as needed.
- Use the "Remove Row" button to remove any unnecessary rows.
- Use the "Clear data" button to clear all data from the table.


## Development

This project uses JavaScript CSS and HTML, and no additional frameworks or libraries are necessary.

## Prerequisites

To develop this project, you will need:

- A text editor such as Sublime Text or Visual Studio Code
- A web browser such as Google Chrome or Mozilla Firefox

### Installing

No installation is necessary for development.

### Contributing

Contributions to this project are welcome! If you would like to contribute, please fork this repository and submit a pull request with your changes.
