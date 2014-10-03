### Available
List of Available new TLD, gTLD dictionary word domain names.

[![Build Status](https://drone.io/github.com/dahal/Available/status.png)](https://drone.io/github.com/dahal/Available/latest)

#### Instructions:-

```
~> git clone git@github.com:dahal/Available.git
~> cd Available && bundle install
#Make sure to have mongoDB installed
~> rake db:create && rake db:migrate && rake db:seed
~> rails s
```

#### API Documentation

#### Endpoints
```
GET   /domains/all_domains
GET   /domains/three_letter_domains
GET   /domains/four_letter_domains
GET   /domains/starts_with_letter/:letter
GET   /domains/ends_with_tld/:tld

```

##### All available domain names
---
```
GET   /domains/all_domains
```

This endpoint will give access to all the available domain names.

###### Example

```
~> curl http://localhost:3000/domains/all_domains
```

```json
[
{
	id: "542dfd710033c50761000001",
	name: "upo.institute"
},
{
	id: "542dfd710033c50761000002",
	name: "hum.estate"
},
{
	id: "542dfd710033c50761000003",
	name: "fop.equipment"
},
{
	id: "542dfd710033c50761000004",
	name: "wab.town"
},
{
	id: "542dfd710033c50761000005",
	name: "err.care"
},
{
	id: "542dfd720033c50761000006",
	name: "ohm.flights"
},
{
	id: "542dfd720033c50761000007",
	name: "zed.flights"
},
{
	id: "542dfd720033c50761000008",
	name: "keg.condos"
}
]
```

##### Three Letter domain names
---
```
GET   /domains/three_letter_domains
```

This endpoint will give access to all the available three letter domain names.

###### Example

```
~> curl http://localhost:3000/domains/three_letter_domains
```

```json
[
{
	id: "542dfd710033c50761000001",
	name: "upo.institute"
},
{
	id: "542dfd710033c50761000002",
	name: "hum.estate"
},
{
	id: "542dfd710033c50761000003",
	name: "fop.equipment"
},
{
	id: "542dfd710033c50761000004",
	name: "wab.town"
},
{
	id: "542dfd710033c50761000005",
	name: "err.care"
},
{
	id: "542dfd720033c50761000006",
	name: "ohm.flights"
},
{
	id: "542dfd720033c50761000007",
	name: "zed.flights"
},
{
	id: "542dfd720033c50761000008",
	name: "keg.condos"
}
]
```


##### Four Letter domain names
---
```
GET   /domains/four_letter_domains
```

This endpoint will give access to all the available four letter domain names.

###### Example

```
~> curl http://localhost:3000/domains/four_letter_domains
```

```json
[
{
	id: "542dfd7c0033c5076100002e",
	name: "amah.computer"
},
{
	id: "542dfd7c0033c5076100002f",
	name: "moas.computer"
},
{
	id: "542dfd7c0033c50761000030",
	name: "tody.bike"
},
{
	id: "542dfd7c0033c50761000031",
	name: "kith.camp"
},
{
	id: "542dfd7c0033c50761000032",
	name: "sent.management"
},
{
	id: "542dfd7c0033c50761000033",
	name: "hons.equipment"
},
{
	id: "542dfd7d0033c50761000034",
	name: "hyte.construction"
},
{
	id: "542dfd7d0033c50761000035",
	name: "whip.training"
}
]
```

##### Domains starting with certain letters
---
```
GET   /domains/starts_with_letter/:letter
```

This endpoint will give access to all the available domain names starting with the letter passed on params.

###### Example

```
~> curl http://localhost:3000/domains/starts_with_letter/a
```

```json
[
{
	id: "542dfd760033c5076100001c",
	name: "arc.care"
},
{
	id: "542dfd7b0033c5076100002d",
	name: "awn.limo"
},
{
	id: "542dfd7c0033c5076100002e",
	name: "amah.computer"
},
{
	id: "542dfd7f0033c5076100003e",
	name: "aril.fish"
},
{
	id: "542dfd7f0033c50761000045",
	name: "alps.parts"
}
]
```

##### Domains ending with certain extension
---
```
GET   /domains/ends_with_tld/:tld
```

This endpoint will give access to all the available domain names ending with the extension passed on params.

###### Example

```
~> curl http://localhost:3000/domains/ends_with_tld/academy
```

```json
[
	{
		id: "542dfd730033c5076100000f",
		name: "mel.academy"
	},
	{
		id: "542dfd750033c50761000015",
		name: "peh.academy"
	}
]
```