#!/bin/bash

API="http://localhost:4741"
URL_PATH="/pokemons"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "pokemon": {
      "name": "Jimmy",
  		"abilities": {
  			"abilityOne": "'"${ABILITYONE}"'",
  			"abilityTwo": "'"${ABILITYTWO}"'"
  		},
  		"height": "'"${HEIGHT}"'",
  		"heldItem": "'"${HELDITEM}"'",
  		"locationAreaEncounter": "'"${AREA}"'"
    }
  }'

echo
