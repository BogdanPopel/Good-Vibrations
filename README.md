# Good-Vibrations
Developed by [Radu-Ioan Mihai](https://github.com/rimihai2001), [Emil-Bogdan Popel](https://github.com/BogdanPopel) and [Maria-Raluca Stanescu](https://github.com/maria-raluca-st) for the Software Development Methods Course Project.

## App Description

Web Application written with Angular and Bootstrap that shows what type of music is played in different locations(Clubs/Restauratns/Cafes etc.) and the usual volume.

Although maybe not evident at first , the volume and type of music played somewhere plays a huge role in how much we enjoy ourselves when going out.Sometimes it is not even a difference in taste , maybe it is just a different vibe than we were going for. Or maybe the music is simply too loud for working. Or too quiet for partying.

This is where we come in :)

Our app offers all the necessary stats and info in order to make the best possible decision. For each place , the volume is rated from 0 to 10 , 10 being the loudest possible level of music. The genres played there are listed clearly , in order for anybody to find the most suitable place from the list.

## Demo

## Backlog
We used GitHub projects in order to create the backlog and manage our tasks durint the development of the application. The backlog can be found [here](https://github.com/users/maria-raluca-st/projects/1)

## User Stories

User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user.

Our team has come up with 10 user stories:

1. As a student, I want to find places without any music so I can concentrate.
2. As a traveler, I want to easily find suitable places for whatever mood I'm in.
3. As a journalist, I want a quiet place to have my meetings.
4. As an old person, I want to find places that play music that takes me back to my youth.
5. As a music fanatic, I would like to know what genres are played in a specific place.
6. As a music journalist, I would like to find places that play newly released music.
7. As an extrovert, I want to easily find loud and crowded places with music of my liking.
8. As a person with sensory processing issues, I would like to go to places that only play calming music.
9. As a concert goer, I would like to go to places that play live and loud music.
10. As a person with hearing aid, I prefer knowing the volume of music in a place before visiting it.

## UML

![Capture](https://user-images.githubusercontent.com/79644230/173411968-525d44ed-53d6-401b-a146-0d11b704c108.PNG)

## Bug Reporting

During the development, we encountered some bugs:

1. The footer options were not visible on phones, because of the "collapse navbar-collapse" Bootstrap class, so we had to delete it and rewrite it manually in CSS. The fix is available [here](https://github.com/maria-raluca-st/Good-Vibrations/commit/171825dce8ea04231a5203a363c6a530ed54c5d9).

2. The location address was not sent to the database. We solved this issue by adding the "address" variable in the Location class [here](https://github.com/maria-raluca-st/Good-Vibrations/commit/a2c02734cf26daeca44a2a2020e18055a6d6bbc6).

3. The location image did not appear because VSC Prettier extension deleted a curly brace when adding the value to the frontend. The issue was solved [here](https://github.com/maria-raluca-st/Good-Vibrations/commit/b8f64408b6e9601f7e5737e482a1b4c7b9ac7740).

4. The footer was not transparent, so some of our components were not visible. We fixed this issue [here]().


## Automation Testing

For testing, we used the ng test command from AngularCLI, that uses the Jasmine Test Framework.

![Karma - Google Chrome 6_13_2022 8_13_53 PM](https://user-images.githubusercontent.com/79644230/173408553-205b114f-4def-4510-be4d-047df65a3710.png)



