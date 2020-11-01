Feature: Movies

    I want to check button App actions

    Scenario: Click on specic movie and check content is right
        Given I go to 'http://localhost:8080'
        When I click on href '740985'
        Then I should see '740985' in the url
        And I should see 'Borat Subsequent Moviefilm'

    Scenario: Back to movies list from a movie details clicking on first element a (the logo)
        Given I go to 'http://localhost:8080/740985'
        When I click on first element a
        Then I should't see '740985' in the url
