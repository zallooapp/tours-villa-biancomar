var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking-entrance",
      "name": "Parking Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.223499909776244,
          "pitch": 0.29236188513163697,
          "rotation": 0,
          "target": "1-open-the-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-open-the-gate",
      "name": "Open The Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.847136781072356,
          "pitch": 0.31114696235311,
          "rotation": 0,
          "target": "2-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15088718453826644,
          "pitch": 0.5329070410580634,
          "rotation": 0,
          "target": "3-parking"
        },
        {
          "yaw": 0.11740326559081282,
          "pitch": 0.19749995247494567,
          "rotation": 0,
          "target": "4-main-door"
        },
        {
          "yaw": 2.85027298905156,
          "pitch": 0.1811167975253163,
          "rotation": 0,
          "target": "1-open-the-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7705289748992517,
          "pitch": 0.2104746698342641,
          "rotation": 0,
          "target": "2-parking"
        },
        {
          "yaw": -0.3765492324489301,
          "pitch": 0.2218535240710917,
          "rotation": 0,
          "target": "4-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-door",
      "name": "Main Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05521191800330172,
          "pitch": 0.49706917139916484,
          "rotation": 0,
          "target": "5-entrance"
        },
        {
          "yaw": 2.666866318147566,
          "pitch": 0.25104451710386044,
          "rotation": 0,
          "target": "3-parking"
        },
        {
          "yaw": 2.6602906373497053,
          "pitch": 0.08116193672405103,
          "rotation": 0,
          "target": "2-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6085776960377984,
          "pitch": 0.6487089464677194,
          "rotation": 0,
          "target": "6-entrance-toilet"
        },
        {
          "yaw": 0.17759645423989845,
          "pitch": 0.4972469020507919,
          "rotation": 0,
          "target": "7-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrance-toilet",
      "name": "Entrance Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5485215585849383,
          "pitch": 0.6653844602470258,
          "rotation": 0,
          "target": "5-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6992972053707565,
          "pitch": 0.37588486208128913,
          "rotation": 0,
          "target": "8-living-area"
        },
        {
          "yaw": 0.715672034964971,
          "pitch": 0.10659188261001695,
          "rotation": 5.497787143782138,
          "target": "20-first-floor-hallway"
        },
        {
          "yaw": -2.975431132085113,
          "pitch": 0.5544963226506763,
          "rotation": 0,
          "target": "5-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.595627955939067,
          "pitch": 0.42732212694762595,
          "rotation": 0,
          "target": "7-living-area"
        },
        {
          "yaw": -1.9627712378528024,
          "pitch": 0.3837047799385829,
          "rotation": 0,
          "target": "9-living-area"
        },
        {
          "yaw": -0.22123773289838766,
          "pitch": 0.3683569510079341,
          "rotation": 0,
          "target": "15-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.330190706045446,
          "pitch": 0.29637373509820186,
          "rotation": 0,
          "target": "8-living-area"
        },
        {
          "yaw": -0.709572450102975,
          "pitch": 0.4355386892295048,
          "rotation": 0,
          "target": "10-outside-kitchen"
        },
        {
          "yaw": -1.4085147861759584,
          "pitch": 0.33914368032702313,
          "rotation": 5.497787143782138,
          "target": "11-outside-kitchen"
        },
        {
          "yaw": -0.49570715245608277,
          "pitch": 0.2592160009239901,
          "rotation": 0,
          "target": "16-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-outside-kitchen",
      "name": "Outside Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03107816202310687,
          "pitch": 0.3704776919594348,
          "rotation": 0,
          "target": "16-pool"
        },
        {
          "yaw": 2.165048055965638,
          "pitch": 0.4723856153501984,
          "rotation": 0,
          "target": "9-living-area"
        },
        {
          "yaw": -0.9473059371051065,
          "pitch": 0.2294379454860973,
          "rotation": 0,
          "target": "17-pool"
        },
        {
          "yaw": -2.1297960834319376,
          "pitch": 0.4248222419981982,
          "rotation": 0,
          "target": "11-outside-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-outside-kitchen",
      "name": "Outside Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4464507010219734,
          "pitch": 0.20430418312552767,
          "rotation": 0,
          "target": "16-pool"
        },
        {
          "yaw": 0.857231643688575,
          "pitch": 0.3368785243630068,
          "rotation": 0,
          "target": "10-outside-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-outside-shower",
      "name": "Outside Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1131883096870547,
          "pitch": 0.34497626519588565,
          "rotation": 0,
          "target": "13-outside-toilet"
        },
        {
          "yaw": -1.666453467798025,
          "pitch": 0.35913553458923886,
          "rotation": 0,
          "target": "14-pool"
        },
        {
          "yaw": -1.848868218058108,
          "pitch": 0.237707227022522,
          "rotation": 0,
          "target": "15-pool"
        },
        {
          "yaw": -2.740420944786999,
          "pitch": 0.23785454637044978,
          "rotation": 0,
          "target": "36-first-floor-outside-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-outside-toilet",
      "name": "Outside Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.028194516818965454,
          "pitch": 0.2834936589185233,
          "rotation": 0,
          "target": "12-outside-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3346648789512372,
          "pitch": 0.21331900954096028,
          "rotation": 0,
          "target": "12-outside-shower"
        },
        {
          "yaw": -3.082285242903847,
          "pitch": 0.26749463917159844,
          "rotation": 0,
          "target": "8-living-area"
        },
        {
          "yaw": -2.4091997771074585,
          "pitch": 0.6244071483520521,
          "rotation": 0,
          "target": "15-pool"
        },
        {
          "yaw": -1.7912784461517486,
          "pitch": 0.22949825196059415,
          "rotation": 0,
          "target": "16-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0895297180912191,
          "pitch": 0.6159845997288649,
          "rotation": 0,
          "target": "14-pool"
        },
        {
          "yaw": 1.2634030625124861,
          "pitch": 0.1714668529347918,
          "rotation": 0,
          "target": "12-outside-shower"
        },
        {
          "yaw": 2.6724103005959137,
          "pitch": 0.29559878127947137,
          "rotation": 0,
          "target": "8-living-area"
        },
        {
          "yaw": -1.6076824049415013,
          "pitch": 0.39028610236582395,
          "rotation": 0,
          "target": "16-pool"
        },
        {
          "yaw": -1.5891143342959442,
          "pitch": 0.1817020937849385,
          "rotation": 0,
          "target": "17-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6126187558439504,
          "pitch": 0.32463708843162564,
          "rotation": 0,
          "target": "15-pool"
        },
        {
          "yaw": 1.3565243537441916,
          "pitch": 0.2341535195368163,
          "rotation": 0,
          "target": "14-pool"
        },
        {
          "yaw": 2.908769467045021,
          "pitch": 0.45483152460008647,
          "rotation": 0,
          "target": "10-outside-kitchen"
        },
        {
          "yaw": 2.688893429480805,
          "pitch": 0.27173299925018135,
          "rotation": 0,
          "target": "9-living-area"
        },
        {
          "yaw": -1.574426780973532,
          "pitch": 0.3595567863757019,
          "rotation": 0,
          "target": "17-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5162690356931527,
          "pitch": 0.294123732312654,
          "rotation": 0,
          "target": "16-pool"
        },
        {
          "yaw": 2.1223658468707365,
          "pitch": 0.23855581307251228,
          "rotation": 0,
          "target": "10-outside-kitchen"
        },
        {
          "yaw": -2.1151695248777536,
          "pitch": 0.483425983157856,
          "rotation": 0,
          "target": "18-playground"
        },
        {
          "yaw": 1.5838932940703163,
          "pitch": 0.14816286297163117,
          "rotation": 0,
          "target": "15-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-playground",
      "name": "Playground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.043479034183033,
          "pitch": 0.05071631503589202,
          "rotation": 0,
          "target": "17-pool"
        },
        {
          "yaw": -1.033781185857535,
          "pitch": 0.4669675545637286,
          "rotation": 0,
          "target": "19-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-playground",
      "name": "Playground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.908074076678509,
          "pitch": -0.017611009089154805,
          "rotation": 0,
          "target": "18-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-first-floor-hallway",
      "name": "First Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1152683206321603,
          "pitch": 1.000698529148643,
          "rotation": 0.7853981633974483,
          "target": "7-living-area"
        },
        {
          "yaw": -0.1300006275555301,
          "pitch": 0.4071520813637264,
          "rotation": 0,
          "target": "21-first-floor-hallway"
        },
        {
          "yaw": -1.8577668093571695,
          "pitch": 0.6321488379234488,
          "rotation": 0,
          "target": "27-room"
        },
        {
          "yaw": -3.048614820863774,
          "pitch": 0.5655497964705951,
          "rotation": 0,
          "target": "22-first-floor-hallway"
        },
        {
          "yaw": 3.135123980113951,
          "pitch": 0.3139642542577583,
          "rotation": 0,
          "target": "34-room"
        },
        {
          "yaw": 0.78948070932109,
          "pitch": 0.5558312936807877,
          "rotation": 0,
          "target": "36-first-floor-outside-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-first-floor-hallway",
      "name": "First Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5906957994788549,
          "pitch": 0.6583589692555822,
          "rotation": 0,
          "target": "24-room"
        },
        {
          "yaw": 3.037894289422276,
          "pitch": 0.45986721567440547,
          "rotation": 0,
          "target": "20-first-floor-hallway"
        },
        {
          "yaw": 3.129936058116966,
          "pitch": 0.3018479736205677,
          "rotation": 0,
          "target": "22-first-floor-hallway"
        },
        {
          "yaw": 0.3940254534963259,
          "pitch": 0.7501799968646825,
          "rotation": 0,
          "target": "23-laundry-room"
        },
        {
          "yaw": -1.5689148800859751,
          "pitch": 0.37895887511789716,
          "rotation": 0,
          "target": "26-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-first-floor-hallway",
      "name": "First Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.002975670500124039,
          "pitch": 0.558466257822273,
          "rotation": 0,
          "target": "20-first-floor-hallway"
        },
        {
          "yaw": -0.16106102875648354,
          "pitch": 0.2508886821554164,
          "rotation": 0,
          "target": "21-first-floor-hallway"
        },
        {
          "yaw": -1.677692152511618,
          "pitch": 0.6592162394734178,
          "rotation": 0,
          "target": "30-room"
        },
        {
          "yaw": 2.9504231161907555,
          "pitch": 0.5087885341338705,
          "rotation": 0,
          "target": "33-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-laundry-room",
      "name": "Laundry Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8176880304927305,
          "pitch": 0.775062720021797,
          "rotation": 0,
          "target": "21-first-floor-hallway"
        },
        {
          "yaw": 3.1370265157968067,
          "pitch": 0.352165100689275,
          "rotation": 0,
          "target": "20-first-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4308788693400878,
          "pitch": 0.6769730428628549,
          "rotation": 0,
          "target": "25-room-bathroom"
        },
        {
          "yaw": -1.4764971408156988,
          "pitch": 0.5352937135118303,
          "rotation": 0,
          "target": "26-room"
        },
        {
          "yaw": 1.4648328778056632,
          "pitch": 0.6714916820473782,
          "rotation": 0,
          "target": "21-first-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-room-bathroom",
      "name": "Room Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9567573674065493,
          "pitch": 0.6938448391372489,
          "rotation": 0,
          "target": "24-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5496263378305217,
          "pitch": 0.5434061486488844,
          "rotation": 0,
          "target": "24-room"
        },
        {
          "yaw": 1.509451618109412,
          "pitch": 0.3507106411849037,
          "rotation": 0,
          "target": "21-first-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.48966843393982,
          "pitch": 0.5761896224756171,
          "rotation": 0,
          "target": "20-first-floor-hallway"
        },
        {
          "yaw": 0.4866935540248498,
          "pitch": 0.6315181650678845,
          "rotation": 0,
          "target": "28-room-bathroom"
        },
        {
          "yaw": -1.3230083645732762,
          "pitch": 0.41453254854878097,
          "rotation": 0,
          "target": "29-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-room-bathroom",
      "name": "Room Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9019721583184115,
          "pitch": 0.67399411994273,
          "rotation": 0,
          "target": "27-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.665488440459792,
          "pitch": 0.36935507431836,
          "rotation": 0,
          "target": "27-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5835564930869097,
          "pitch": 0.6817351720752711,
          "rotation": 0,
          "target": "22-first-floor-hallway"
        },
        {
          "yaw": -1.556923678909719,
          "pitch": 0.3935551044810417,
          "rotation": 0,
          "target": "32-room"
        },
        {
          "yaw": 2.856465368990315,
          "pitch": 0.7169090463455703,
          "rotation": 0,
          "target": "31-room-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-room-bathroom",
      "name": "Room Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3165322000133539,
          "pitch": 0.6557790345572041,
          "rotation": 0,
          "target": "30-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4600450994162282,
          "pitch": 0.3465507358454616,
          "rotation": 0,
          "target": "30-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.030677614877133053,
          "pitch": 0.4232618092119651,
          "rotation": 0,
          "target": "22-first-floor-hallway"
        },
        {
          "yaw": 0.0633080810430311,
          "pitch": 0.24979429873878445,
          "rotation": 0,
          "target": "20-first-floor-hallway"
        },
        {
          "yaw": -2.6552974965532616,
          "pitch": 0.606245512939914,
          "rotation": 0,
          "target": "34-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-room",
      "name": "Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5217558509360316,
          "pitch": 0.469822849975845,
          "rotation": 0,
          "target": "33-room"
        },
        {
          "yaw": -0.9550391602656703,
          "pitch": 0.4943778684033173,
          "rotation": 0,
          "target": "35-room-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-room-bathroom",
      "name": "Room Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.094351198030383,
          "pitch": 0.43985348464563145,
          "rotation": 0,
          "target": "34-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-first-floor-outside-stairs",
      "name": "First Floor Outside Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.47594093095013434,
          "pitch": 0.891994615206988,
          "rotation": 0,
          "target": "12-outside-shower"
        },
        {
          "yaw": 2.857373735416548,
          "pitch": 0.5245762793718569,
          "rotation": 5.497787143782138,
          "target": "37-rooftop"
        },
        {
          "yaw": -2.219701109862484,
          "pitch": 0.5893655848341943,
          "rotation": 0,
          "target": "20-first-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-rooftop",
      "name": "Rooftop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.500740567090662,
          "pitch": 0.4079825130729873,
          "rotation": 0,
          "target": "36-first-floor-outside-stairs"
        },
        {
          "yaw": -2.1039010592789857,
          "pitch": 0.3636003905356091,
          "rotation": 0.7853981633974483,
          "target": "38-rooftop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-rooftop",
      "name": "Rooftop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.513213952138944,
          "pitch": 0.3012505078637062,
          "rotation": 5.497787143782138,
          "target": "37-rooftop"
        },
        {
          "yaw": 1.4114084165925203,
          "pitch": 0.14149824924522392,
          "rotation": 0,
          "target": "36-first-floor-outside-stairs"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
