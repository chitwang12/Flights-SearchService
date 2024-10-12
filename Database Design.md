AIRLINE MANAGEMENT SYSTEM : NODE JS BACKEND 



DATABASE DESIGN 

AirPlane Table 							
Id  
model_number
Capacity


Created_at


updated_at

               							

	1:N 				Relationship bw Airplane and Flights is : One Airplane to          Many Flights 

Flights


Id 
src_airport_id
dest_airport_id
departure_date
Arrival_date


Departure_time


Arrival_time



            						Airport 
							- Id 
City			      1:n		             	- Name 
- Id 							- City_id
- Name 						- Address
Relationships bw both the tables
1 City has many Airports 



A Flight Belongs to an Airplane but one airplane can be used in multiple flights 
A city has many airports bit one airport belongs to a city 
One Airport can have many flights , but a flight belongs to one airport 



