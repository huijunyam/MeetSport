# Component Hierarchy
### Welcome
- Header
- AuthForm
- Footer

### AuthFormContainer
- AuthForm

### CitiesContainer
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
| Path                             | Component              |
| ---------------------------------| -----------------------|
| "/"                              | "App"                  |
| "/login"                         | "AuthFormContainer"    |
| "/signup"                        | "AuthFormContainer"    |
| "/cities"                        | "CityListContainer"    |
| "/city/:cityId"                  | "CityContainer"        |
| "/city/:cityId/member"           | "CityMemberContainer"  |
| "/city/:cityId/calendar"         | "CityCalendarContainer"|
| "/city/:cityId/event"            | "CityEventContainer"   |
| "/event/:id"                     | "EventContainer"       |
| "/city/:cityId/create"           | "EventFormContainer"   |
| "/cities/search"                 | "SearchResultContainer"|
