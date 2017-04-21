# Movies Client Side User Stories

**As** a visitor,
**I want** to sign in the website,
**So that I can** use registered user specific functionality

**As** a client,
**I want** to add some movies to the website,
**So that I'll be able to** manage them

**As** a client,
**I want** to update some movies,
**So that I can** view it's new updated details

**As** a client,
**I want** to delete some useless movies,
**So that I can** fetch only usefull movies

**As** a client,
**I want** to view some movies' details,
**So that I can** chose which operation to perform on  

**As** a client,
**I want** to add some actors to the website,
**So that I'll be able to** manage them

**As** a client,
**I want** to update some actors,
**So that I can** view it's new updated details

**As** a client,
**I want** to delete some useless actors,
**So that I can** fetch only usefull movies

**As** a client,
**I want** to view some actors' details,
**So that I can** chose which operation to perform on

----------------
## Acceptance Criteria 

**Given** I'm at the sign up page,
**When** I enter all required fields in the right way,
**Then I expect** access to the client side

**Given** I'm at the sign up page,
**When** I enter some unsuitable fields,
**Then I expect** a sign up declined message

**Given** I'm at the home page,
**When** I enter all required fields in the right way,
**Then I expect** adding a new item(movie or actor)

**Given** I'm at the home page,
**When** I enter in the year field an unsuiable value,
**Then I expect** an error message

**Given** I'm at the home page,
**When** I click on delete an item(movie or actor),
**Then I expect** getting all items except that item

**Given** I'm at the home page,
**When** I chose a specific item(movie or actor) to view it's details,
**Then I expect** getting all informations about that item

**Given** I'm at the home page,
**When** I click on movies (or actors) button,
**Then I expect** getting in movies (or actors) space