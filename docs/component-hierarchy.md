# Component Hierarchy
### Welcome 
- Header
- AuthForm
- Footer 

### AuthFormContainer 
- AuthForm

### HomeContainer 
- Header
- Search
- CityList/SearchResult
- Footer 

### CityContainer 
- Header
- CityHeader
- Sublists
- Footer 

### CityMemberContainer
- Header 
- CityHeader
- Sublists
- Members
- Footer

### CityCalendarContainer
- Header
- CityHeader
- Sublists
- Calendar 
- Footer

### EventContainer 
- Header
- EventHeader 
- Event
- Footer
 
### SearchResultContainer
- SearchBar
- SearchResult

### Routes 
| Path                           | Component              |
| -------------------------------| -----------------------|
| "/"                            | "App"                  |
| "/welcome"                     | "Welcome"              |
| "/welcome/login"               | "AuthFormContainer"    |
| "/welcome/signup"              | "AuthFormContainer"    |
| "/home"                        | "CityListContainer"    |
| "/home/city/:cityId"           | "CityContainer"        |
| "/home/city/:cityId/member"    | "CityMemberContainer"  |
| "/home/city/:cityId/calendar"  | "CityCalendarContainer"|
| "/home/city/:cityId/event"     | "CityEventContainer"   |
| "/home/city/:cityId/event/:id" | "EventContainer"       |
| "/home/city/:cityId/create"    | "EventFormContainer"   |
| "/home/search"                 | "SearchResultContainer"|
