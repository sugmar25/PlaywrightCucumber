Feature: Validate the presence of "Quality" in job titles

@regression
  # This scenario checks if at least one job title contains the word "Quality"
  Scenario: Verify job listings include a title with "Quality"

    Given Open the Careers page
    # Improvement: Consider parameterizing the URL to support testing across environments (e.g., staging, prod)

    When I retrieve the list of all open job titles
    # Improvement: Add a step to print the total number of jobs found for better visibility

    Then I should see at least one job title that contains the word "Quality"
    # Improvement: Add a step to log all job titles for debugging and reporting
    # Improvement: Consider making the keyword ("Quality") a parameter to reuse this scenario for other roles