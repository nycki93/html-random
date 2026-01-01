# multi slot randomizer

## setup

download this project and put it in a folder somewhere.

you may be able to simply right-click on index.html and open in a browser.

if that doesn't work:

- install python 3
- open a terminal in the folder with index.html in it
- run this command: `python3 -m http.server`
- open in browser: <http://localhost:8000/>

## usage

put the stuff you want to shuffle inside data.json. example:

```json
{
  "decision 1": ["pepperoni", "cheese", "pineapple"],
  "decision 2": ["fight", "pkmn", "item", "run"]
}
```

each decision can be named whatever you want, and each will be handled separately.
