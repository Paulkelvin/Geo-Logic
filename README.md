# Instant Geographic Data Manipulation

Table of Contents
=================

- [Introduction 🌎](#introduction-)
- [Traversing Section 🧭](#traversing-section-)
  - [First Table 🧮](#first-table-)
  - [Second Table 📐](#second-table-)
    - [Features 🚀](#features-)
  - [Usage 📋](#usage-)
    - [First Table 🧮](#first-table--1)
    - [Second Table 📐](#second-table--1)
- [Website 🌐](#website-)
  - [Development](#development)
  - [Prerequisites 📝](#prerequisites-)
  - [Installing 💻](#installing-)
  - [Contributing 🤝](#contributing-)

## Introduction 🌎

The Instant Geographic Data Manipulation app is a web-based tool that enables users to perform various geographic data manipulation functions.

## Traversing Section 🧭

The Traversing section of this app is a web-based tool containing two functionalities:

### First Table 🧮

It allows users to calculate the coordinates of points based on the input of coordinates of the starting point, then distances and bearings of the next point which is the end point and displays the result on the end point. Subsequently, this table assumes the calculated coordinate as the parameter for start point to calculate the coordinate of the next point. This tool can be used in fields such as surveying and cartography, as well as in educational settings.

### Second Table 📐

It allows the user compute for distance, bearing, deltaEasting and deltaNorthing between two points, It uses the last two entry of coordinates to solve for the parameters mentioned earlier and displays the result on the most recent row with a coordinate value.

#### Features 🚀

- Toggle button to switch between functional tables 🔄
- Add and remove rows from the table 📝
- Automatically calculate and display the coordinates of each point based on the input of distances and bearings and coordinate of start point 📈
- Display the change in X and Y values between each point 📊

### Usage 📋

#### First Table 🧮

To use the **First Table**, follow these steps:

1. Enter the coordinates(easting and northing) for the start point
2. Click the "Add Row" button to add a new row to the table.
3. Enter the distance and bearing values for the second point in the table using the next row.
4. The Table will automatically calculate and displays the coordinates and change in easting and northing of the second point based on these input made.
5. Repeat steps 1-3 for as many points as needed.
6. Use the "Remove Row" button to remove any unnecessary rows.
7. Use the "Clear data" button to clear all data from the table.

#### Second Table 📐

To use the **Second Table**, follow these steps:

1. Enter the coordinates(easting and northing) for the start point
2. Click the "Add Row" button to add a new row to the table.
3. Enter the coordinates(easting and northing) for the next row which is the relative end point to the start point.
4. The Table will instantly calculate and display the bearing, distance, change
5 Repeat steps 1-3 for as many points as needed.
6 Use the "Remove Row" button to remove any unnecessary rows.
7 Use the "Clear data" button to clear all data from the table.

## Website 🌐
You can access the app through this link: [GeoLogic](https://paulkelvin.github.io/Geo-Logic/)

### Development

This project uses JavaScript CSS and HTML, and no additional frameworks or libraries are necessary.

## Prerequisites 📝

To develop this project, you will need:

- A text editor such as Sublime Text or Visual Studio Code
- A web browser such as Google Chrome or Mozilla Firefox

### Installing 💻

No installation is necessary for development.

### Contributing 🤝

Contributions to this project are welcome! If you would like to contribute, please fork this repository and submit a pull request with your changes.
