function initialize() {

//マップの中心座標
var myLatLng = new google.maps.LatLng(34.028017, 135.182775);

//マップの設定オプション
var myOptions = {
    zoom: 17,
    center: myLatLng,
    disableDefaultUI: true,
    disableDoubleClickZoom: false,
    mapTypeControl: true,
    scrollwheel: false,
    draggable: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.DEFAULT,
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    mapTypeControlOptions: {
        mapTypeIds: [
            //google.maps.MapTypeId.ROADMAP
            ]
        }
    };

//マップの表示ID
map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//マーカーの設定オプション
var obj={
    position:new google.maps.LatLng(34.028017, 135.182775),
    map:map,
    animation: google.maps.Animation.DROP
};
var marker=new google.maps.Marker(obj);

var haccastyle = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "color": "#12194b"
            }
        ]
    }
];

    var styledMapOptions = {name: "地図"};
    var haccaMapType = new google.maps.StyledMapType(haccastyle, styledMapOptions);
    map.mapTypes.set('simple', haccaMapType);
    map.setMapTypeId('simple');
}
