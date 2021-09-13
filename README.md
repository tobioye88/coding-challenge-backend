# Sherpa° Coding Challenge

## Introduction

Hi! If you're reading this then it's because you're in the interview process with us at sherpa° and have been invited to
complete the coding challenge. Congratulations!

This coding challenge is designed to assess your ability while giving you the freedom to express yourself and show off
what you consider to be best practices.

## Setup

This repo contains the skeleton of an express app in typescript, to which you will add functionality. The code here was
built for node version 14.

The first step is to run `npm i` to install the required dependencies.

A handful of scripts are provided, `npm run build` will build the application, `npm run start` will start the
application, `npm run test` will run the tests.

The last script `generateData` should be executed in order to populate a json file at `data/data.json` this is required
because it is necessary that the data have dates that are in the near future.

## The scenario

You are a developer at a consulting company to work on a brand-new project, requirement is to build an application to
service an events management company.

Currently, everything is being managed by hand and this is proving unwieldy. The first step of the first iteration of
the solution is to build a REST api to perform CRUD operations on events.

### Requirements

#### The Data

Determine how to model the data. The clients have provided a sample of their data in `data/data.json`. Your project
manager has told you that they have events, events have a location, a name, and an organizer, who is a member of staff
responsible for the event. You also know that the're will be a need to associate a list of invitees with events, along
with their rsvp status.

**Derive a data model for this relation of entities. Create the tables in the sqlite database, you may want to think
about maintainability and documentation, an ERD might be useful, as might a migration process, you may want to think
about using an ORM.**

The data given to you by the clients is a sample of the data as you expect to receive it. When the time comes they will
provide a large json file to import into the db.

**Import the sample data into the database, write a script to do this and bear in mind it must operate at scale. You
should think about data integrity, these clients are not tech savvy and we dont know how this json is being generated**

#### The api

`GET /events`

Retrieve upcoming events, the endpoint must accept the following query parameters:

- `from`: optional, number representing of milliseconds elapsed since January 1, 1970, defaults to `Date.now()` only
  return events after this
- `until`: optional, number representing of milliseconds elapsed since January 1, 1970, if omitted assume all upcoming
  events are included
- `limit`: optional, maximum number of results to return
- `offset`: optional, number of results to offset results returned by

The required response is:

```
{
    results: [
        {
            id: <unique identifier of event in our system>,
            name: string,
            date: Date,
            isOutside: boolean
            attandees: [] // empty array is fine for first iteration
            organizer: {
                id: <unique identifier of organizer in our system>,
                name: string
            },
        }
    ],
    paginationParams: {
        limit: number,
        offset: number,
        total: number,
    }
}
```

`GET /events/{eventId}`

Retrieve details for an upcoming event

```
{
    id: <unique identifier of event in our system>,
    name: string,
    date: Date,
    isOutside: boolean
    attandees: [] // empty array is fine for first iteration
    organizer: {
        id: <unique identifier of organizer in our system>,
        name: string
    },
    // if an event is outside and occuring withing 7 days, call any weather api to get the following details
    // if an event is not outside, or not occuring within 7 days this should be null
    weather: null || {
        temperatureInDegreesCelcius: number,
        chanceOfRain: number 0-100
    }
    // if an event is happening in any country other than canada, fetch the visa and proof of vaccination requirements
    // if an event is happening in canada, leave this null
    visaRequirements: null | string
    proofOfVaccineRequired: null | boolean
}
```
