const CENTER_COORDS = [50.072207, 19.856787];
const FIRST_CAT_POINT = [50.0762496591327, 19.85702951393996];
const SECOND_CAT_POINT = [50.0708092485313, 19.85879826865925];
const THIRD_CAT_POINT = [50.0678417150839, 19.858996435744917];
const INIT_ZOOM = 16;
const INIT_CIRCLE_OPACITY = 0.2;
const CIRCLE_OPACITY_STEP = 0;

const SHOW_CAT_ROUTE = false;

const CAT_ROUTE = [
    CENTER_COORDS,
    FIRST_CAT_POINT,
    SECOND_CAT_POINT,
    THIRD_CAT_POINT,
]

const CIRCLES = [
    {
        radius: 200,
        color: "blue",
        fillColor: "#e2c499",
    },
    {
        radius: 500,
        color: "blue",
        fillColor: "#e2c499",
    },
    {
        radius: 1000,
        color: "blue",
        fillColor: "#e2c499",
    },
    {
        radius: 2000,
        color: "blue",
        fillColor: "#e2c499",
    },
];

const STREETS_TO_MARK = [
    [
        [50.06965011185708, 19.854730999666916],
        [50.0685743533967, 19.85324446632351],
        [50.0686585440596, 19.852960276125504],
        [50.07016927361177, 19.853929437569978]
    ],
    [
        [50.067532236886414, 19.85127611493917],
        [50.06503654097607, 19.86643922358473],
    ],
    [
        [50.06705230545939, 19.854446311426088],
        [50.06913517307388, 19.855717380610322],
    ],
    [
        [50.06673554808255, 19.85640525334532],
        [50.068261723474166, 19.857048264814992],
    ],
    [
        [50.067522638310976, 19.85679405115141],
        [50.06700431205165, 19.859844617193573],
    ],
    [
        [50.06798336805423, 19.855044461657783],
        [50.06768581393004, 19.856674420964627],
    ],
]

const STREETS = [
    [
        [50.07179170960009, 19.856574100522927],
        [50.07122250276807, 19.8562649240462],
        [50.070950952174215, 19.856509010738353],
        [50.07019811538745, 19.856001838790206]
    ],
    [
        [50.071828877717365, 19.856603960177356],
        [50.071896386334245, 19.85690448034793],
        [50.07324894967974, 19.857963814013342],
    ],
    [
        [50.07183128874104, 19.856547612630315],
        [50.072219461970825, 19.85598413731049],
        [50.07255217938909, 19.85619450143546],
        [50.07326823729873, 19.856701629230503],
        [50.07326582635538, 19.858234282108942],
        [50.073157333408595, 19.858339464228532],
        [50.07202417024914, 19.857528059767002],
    ],
    [
        [50.07329256516946, 19.856679933061326],
        [50.07445999205512, 19.85640008839629],
        [50.07552476323831, 19.849054165707425],
    ],
    [
        [50.070048849447716, 19.856032825930757],
        [50.070309552142554, 19.85746207343165],
        [50.07093016627665, 19.85801020298991],
        [50.07104084820826, 19.858207283280525],
        [50.07081553115124, 19.85923579607935],
    ],
    [
        [50.07090644868826, 19.85901408075241],
        [50.07213974781472, 19.85993173585557],
    ],
    [
        [50.07095388385654, 19.858607602653024],
        [50.070202821515565, 19.857973250467616],
    ],
    [
        [50.070187009532376, 19.85765299497123],
        [50.07007632563011, 19.85731426322174],
        [50.069914252312394, 19.857172611762863],
        [50.06939640461846, 19.85732658074528],
        [50.06908806516002, 19.85739432708444],
        [50.06837255187401, 19.857098706635103],
        [50.067878406624246, 19.859131097330565],
        [50.06761354268145, 19.86085554992279],
        [50.06761354268053, 19.86231517590133],
        [50.06870461460658, 19.863097338391075],
    ],
    [
        [50.07016677425885, 19.857945311681803],
        [50.0693044778397, 19.860275646993518],
        [50.06872824267322, 19.86312171231496],
        [50.06872824267322, 19.86312171231496],
    ],
    [
        [50.06871421685527, 19.863188683091884],
        [50.06848172439145, 19.86472683989299],
    ],
    [
        [50.07196312716749, 19.85629375197585],
        [50.072131378158836, 19.85559668429116],
        [50.07266671830481, 19.85177770639261],
    ],
    [
        [50.07251091683775, 19.866562235530786],
        [50.07299923038563, 19.865749741076566],
        [50.07313487216467, 19.8644863825876],
        [50.0732494138116, 19.863603440513785],
        [50.07363825050232, 19.86257960350519],
        [50.07440988607001, 19.861405478478463],
        [50.07625151295925, 19.858700294472957],
        [50.07647455299973, 19.858117928382608],
        [50.076465510855684, 19.85697667888963],
        [50.07642562545564, 19.85640210635484],
        [50.07673626558335, 19.85509408528877],
        [50.07737650988098, 19.853789759190168],
    ],
    [
        [50.073288235498694, 19.85831879247243],
        [50.074392578593816, 19.85882335774819],
        [50.074467307658914, 19.859250297596912],
        [50.07443409475546, 19.85958020566183],
        [50.074114419383456, 19.86016239636463],
        [50.07412687430799, 19.860738118281844],
        [50.07438842697566, 19.861372059269335],
    ],
    [
        [50.067838452987736, 19.847084447218972],
        [50.067896846235094, 19.84768713834028],
    ],
    [
        [50.06818220044688, 19.8526620769819],
        [50.06876728411508, 19.852971996318065],
    ],
    [
        [50.06990808536917, 19.858875185027166],
        [50.07074244313599, 19.859565149278648],
    ],
    [
        [50.0696770298826, 19.859485153423403],
        [50.070562736535855, 19.860165118192977],
    ],
    [
        [50.06953582875281, 19.859805136911465],
        [50.07139708290649, 19.861275060751577],
    ],
    [
        [50.06945880978314, 19.86015511877816],
        [50.071255886847695, 19.86147505038969],
    ]
]

