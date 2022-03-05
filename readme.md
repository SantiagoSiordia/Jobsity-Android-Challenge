# Jobsity Android Challenge

## Description

The main purpose of this project is to test what kind of solutions you can give to certain day-to-day tasks and how well you can accomplish good practices. Do not aim to take the test in the shortest possible time, but with the highest quality, you can achieve.

## Assignment
You will develop an application for listing TV series, using the API provided by the TVMaze
website.

You can find the API [here](https://www.tvmaze.com/api).

## Mandatory features

- [x] List all of the series contained in the API used by the paging scheme provided by the API.
- [x] Allow users to search series by name.
- [x] The listing and search views must show at least the name and poster image of the series.
- [x] After clicking on a series, the application should show the details of the series, showing the following information:
  - [x] Name
  - [x] Poster
  - [x] Days and time during which the series airs
  - [x] Genres
  - [x] Summary
  - [x] List of episodes separated by season
- [x] After clicking on an episode, the application should show the episode's information, including:
  - [x] Name
  - [x] Number
  - [x] Season
  - [x] Summary
  - [x] Image, if there is one

## Bonus (Optional)

- [x] Allow the user to set a PIN number to secure the application and prevent unauthorized users.
- [x] For supported phones, the user must be able to choose if they want to enable fingerprint authentication to avoid typing the PIN number while opening the app.
- [x] Allow the user to save a series as a favorite. <-------------- Via Redux, not persisted yet after app shuts down and reopens.
- [x] Allow the user to delete a series from the favorites list.
- [x] Allow the user to browse their favorite series in alphabetical order, and click on one to see its details.
- [x] Create a people search by listing the name and image of the person.
- [x] After clicking on a person, the application should show the details of that person, such as:
  - [x] Name
  - [x] Image
  - [x] Series they have participated in, with a link to the series details.

## Considerations

- One of the evaluated criteria is UI / UX notion, so no interface mockup is presented. We do not expect a design masterpiece in your application, but we want an application that respects the guidelines of the platform and that has no usability problems.
- Keep your code and classes well organized.
- Follow the requested proposal. If you want to add new features to the app to make your project even better, complete all tasks first.
- [] Unit testing is a plus.
- Extra features are also a plus.

### Extra features
- [x] Loading screens.
- [x] Caching fetching processes.
- [x] Infinite scrolling instead of paginating all series.
- [x] An Image screen to display the full image of any episode, series or person..
- [x] Stack navigation.
- [x] Fallback image.
- [x] Keychain and Keystore store the PIN
- [x] UI I think is cool, I'm not an expert though.

## Deliverables

When you finish the assignment, generate the application apk, and place it into a distribution folder. Then, share the repository link with your initial contact via email. Indicate which, if any, of the bonus tasks you completed.

If you didn't manage to finish everything, please tell us which parts you completed.

# What has been accomplished?

There is a [video on YouTube](https://youtu.be/Ia8WoA9fEhY) I made to demo this app a bit. Some minor changes have been performed on the app since.

**Everything** checked on every section is done.

# Instructions to set up the project locally

```bash
git clone git@github.com:SantiagoSiordia/Jobsity-Android-Challenge.git
cd Jobsity
yarn
cd ios
pod install
cd ..
yarn start
```

That will get the Metro Server up and running. Now whats left is to run the proper command to build the app on android or ios.

```bash
yarn android
```

```bash
yarn ios
```
