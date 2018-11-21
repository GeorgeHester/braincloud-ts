function BCReasonCodes() {
    var bc = this;

    bc.reasonCodes = {};
    bc.reasonCodes.NO_REASON_CODE = 0;
    bc.reasonCodes.INVALID_NOTIFICATION = 20200;
    bc.reasonCodes.INVALID_REQUEST = 40001;
    bc.reasonCodes.CREATING_FACEBOOK_MEMORY = 40200;
    bc.reasonCodes.SWITCHING_FACEBOOK_MEMORY = 40201;
    bc.reasonCodes.MERGING_MEMORY = 40202;
    bc.reasonCodes.RECREATING_ANONYMOUS_MEMORY = 40203;
    bc.reasonCodes.MOVING_ANONYMOUS_MEMORY = 40204;
    bc.reasonCodes.LOGIN_SECURITY_ERROR = 40205;
    bc.reasonCodes.MISSING_IDENTITY_ERROR = 40206;
    bc.reasonCodes.SWITCHING_PROFILES = 40207;
    bc.reasonCodes.MISSING_PROFILE_ERROR = 40208;
    bc.reasonCodes.SECURITY_ERROR = 40209;
    bc.reasonCodes.DOWNGRADING_TO_ANONYMOUS_ERROR = 40210;
    bc.reasonCodes.DUPLICATE_IDENTITY_TYPE = 40211;
    bc.reasonCodes.MERGE_PROFILES = 40212;
    bc.reasonCodes.INVALID_PROPERTY_NAME = 40213;
    bc.reasonCodes.EMAIL_NOT_VALIDATED = 40214;
    bc.reasonCodes.DATABASE_ERROR = 40215;
    bc.reasonCodes.PROPERTY_NOT_OVERRIDEABLE = 40216;
    bc.reasonCodes.UNKNOWN_AUTH_ERROR = 40217;
    bc.reasonCodes.DATABASE_INPUT_TOO_LARGE_ERROR = 40218;
    bc.reasonCodes.MISSING_APP_EMAIL_ACCOUNT = 40219;
    bc.reasonCodes.UNABLE_TO_GET_FRIENDS_FROM_FACEBOOK = 40300;
    bc.reasonCodes.BAD_SIGNATURE = 40301;
    bc.reasonCodes.UNABLE_TO_VALIDATE_PLAYER = 40302;
    bc.reasonCodes.PLAYER_SESSION_EXPIRED = 40303;
    bc.reasonCodes.NO_SESSION = 40304;
    bc.reasonCodes.PLAYER_SESSION_MISMATCH = 40305;
    bc.reasonCodes.OPERATION_REQUIRES_A_SESSION = 40306;
    bc.reasonCodes.TOKEN_DOES_NOT_MATCH_USER = 40307;
    bc.reasonCodes.EVENT_CAN_ONLY_SEND_TO_FRIEND_OR_SELF = 40309;
    bc.reasonCodes.NOT_FRIENDS = 40310;
    bc.reasonCodes.VC_BALANCE_CANNOT_BE_SPECIFIED = 40311;
    bc.reasonCodes.VC_LIMIT_EXCEEDED = 40312;
    bc.reasonCodes.UNABLE_TO_GET_MY_DATA_FROM_FACEBOOK = 40313;
    bc.reasonCodes.INVALID_AUTHENTICATION_TYPE = 40315;
    bc.reasonCodes.INVALID_GAME_ID = 40316;
    bc.reasonCodes.APPLE_TRANS_ID_ALREADY_CLAIMED = 40317;
    bc.reasonCodes.CLIENT_VERSION_NOT_SUPPORTED = 40318;
    bc.reasonCodes.BRAINCLOUD_VERSION_NOT_SUPPORTED = 40319;
    bc.reasonCodes.PLATFORM_NOT_SUPPORTED = 40320;
    bc.reasonCodes.INVALID_PLAYER_STATISTICS_EVENT_NAME = 40321;
    bc.reasonCodes.GAME_VERSION_NOT_SUPPORTED = 40322;
    bc.reasonCodes.BAD_REFERENCE_DATA = 40324;
    bc.reasonCodes.MISSING_OAUTH_TOKEN = 40325;
    bc.reasonCodes.MISSING_OAUTH_VERIFIER = 40326;
    bc.reasonCodes.MISSING_OAUTH_TOKEN_SECRET = 40327;
    bc.reasonCodes.MISSING_TWEET = 40328;
    bc.reasonCodes.FACEBOOK_PAYMENT_ID_ALREADY_PROCESSED = 40329;
    bc.reasonCodes.DISABLED_GAME = 40330;
    bc.reasonCodes.MATCH_MAKING_DISABLED = 40331;
    bc.reasonCodes.UPDATE_FAILED = 40332;
    bc.reasonCodes.INVALID_OPERATION = 40333;
    bc.reasonCodes.MATCH_RANGE_ERROR = 40334;
    bc.reasonCodes.PLAYER_IN_MATCH = 40335;
    bc.reasonCodes.MATCH_PLAYER_SHIELDED = 40336;
    bc.reasonCodes.MATCH_PLAYER_MISSING = 40337;
    bc.reasonCodes.MATCH_PLAYER_LOGGED_IN = 40338;
    bc.reasonCodes.INVALID_ITEM_ID = 40339;
    bc.reasonCodes.MISSING_PRICE = 40340;
    bc.reasonCodes.MISSING_USER_INFO = 40341;
    bc.reasonCodes.MISSING_STEAM_RESPONSE = 40342;
    bc.reasonCodes.MISSING_STEAM_TRANSACTION = 40343;
    bc.reasonCodes.ENTITY_VERSION_MISMATCH = 40344;
    bc.reasonCodes.MISSING_RECORD = 40345;
    bc.reasonCodes.INSUFFICIENT_PERMISSIONS = 40346;
    bc.reasonCodes.MISSING_IN_QUERY = 40347;
    bc.reasonCodes.INVALID_DATABASE_FIELD_NAME = 40347;
    bc.reasonCodes.RECORD_EXPIRED = 40348;
    bc.reasonCodes.INVALID_WHERE = 40349;
    bc.reasonCodes.S3_ERROR = 40350;
    bc.reasonCodes.INVALID_ATTRIBUTES = 40351;
    bc.reasonCodes.IMPORT_MISSING_GAME_DATA = 40352;
    bc.reasonCodes.IMPORT_SCHEMA_VERSION_TOO_OLD = 40353;
    bc.reasonCodes.IMPORT_SCHEMA_VERSION_INVALID = 40355;
    bc.reasonCodes.PLAYER_SESSION_LOGGED_OUT = 40356;
    bc.reasonCodes.API_HOOK_SCRIPT_ERROR = 40357;
    bc.reasonCodes.MISSING_REQUIRED_PARAMETER = 40358;
    bc.reasonCodes.INVALID_PARAMETER_TYPE = 40359;
    bc.reasonCodes.INVALID_IDENTITY_TYPE = 40360;
    bc.reasonCodes.EMAIL_SEND_ERROR = 40361;
    bc.reasonCodes.CHILD_ENTITY_PARTIAL_UPDATE_INVALID_DATA = 40362;
    bc.reasonCodes.MISSING_SCRIPT = 40363;
    bc.reasonCodes.SCRIPT_SECURITY_ERROR = 40364;
    bc.reasonCodes.SERVER_SESSION_EXPIRED = 40365;
    bc.reasonCodes.STREAM_DOES_NOT_EXIT = 40366;
    bc.reasonCodes.STREAM_ACCESS_ERROR = 40367;
    bc.reasonCodes.STREAM_COMPLETE = 40368;
    bc.reasonCodes.INVALID_STATISTIC_NAME = 40369;
    bc.reasonCodes.INVALID_HTTP_REQUEST = 40370;
    bc.reasonCodes.GAME_LIMIT_REACHED = 40371;
    bc.reasonCodes.GAME_RUNSTATE_DISABLED = 40372;
    bc.reasonCodes.INVALID_COMPANY_ID = 40373;
    bc.reasonCodes.INVALID_PLAYER_ID = 40374;
    bc.reasonCodes.INVALID_TEMPLATE_ID = 40375;
    bc.reasonCodes.MINIMUM_SEARCH_INPUT = 40376;
    bc.reasonCodes.MISSING_GAME_PARENT = 40377;
    bc.reasonCodes.GAME_PARENT_MISMATCH = 40378;
    bc.reasonCodes.CHILD_PLAYER_MISSING = 40379;
    bc.reasonCodes.MISSING_PLAYER_PARENT = 40380;
    bc.reasonCodes.PLAYER_PARENT_MISMATCH = 40381;
    bc.reasonCodes.MISSING_PLAYER_ID = 40382;
    bc.reasonCodes.DECODE_CONTEXT = 40383;
    bc.reasonCodes.INVALID_QUERY_CONTEXT = 40384;
    bc.reasonCodes.INVALID_AMOUNT = 40385;
    bc.reasonCodes.GROUP_MEMBER_NOT_FOUND = 40385;
    bc.reasonCodes.INVALID_SORT = 40386;
    bc.reasonCodes.GAME_NOT_FOUND = 40387;
    bc.reasonCodes.GAMES_NOT_IN_SAME_COMPANY = 40388;
    bc.reasonCodes.IMPORT_NO_PARENT_ASSIGNED = 40389;
    bc.reasonCodes.IMPORT_PARENT_CURRENCIES_MISMATCH = 40390;
    bc.reasonCodes.INVALID_SUBSTITUION_ENTRY = 40391;
    bc.reasonCodes.INVALID_TEMPLATE_STRING = 40392;
    bc.reasonCodes.TEMPLATE_SUBSTITUTION_ERROR = 40393;
    bc.reasonCodes.INVALID_OPPONENTS = 40394;
    bc.reasonCodes.REDEMPTION_CODE_NOT_FOUND = 40395;
    bc.reasonCodes.REDEMPTION_CODE_VERSION_MISMATCH = 40396;
    bc.reasonCodes.REDEMPTION_CODE_ACTIVE = 40397;
    bc.reasonCodes.REDEMPTION_CODE_NOT_ACTIVE = 40398;
    bc.reasonCodes.REDEMPTION_CODE_TYPE_NOT_FOUND = 40399;
    bc.reasonCodes.REDEMPTION_CODE_INVALID = 40400;
    bc.reasonCodes.REDEMPTION_CODE_REDEEMED = 40401;
    bc.reasonCodes.REDEMPTION_CODE_REDEEMED_BY_SELF = 40402;
    bc.reasonCodes.REDEMPTION_CODE_REDEEMED_BY_OTHER = 40403;
    bc.reasonCodes.SCRIPT_EMPTY = 40404;
    bc.reasonCodes.ITUNES_COMMUNICATION_ERROR = 40405;
    bc.reasonCodes.ITUNES_NO_RESPONSE = 40406;
    bc.reasonCodes.ITUNES_RESPONSE_NOT_OK = 40407;
    bc.reasonCodes.JSON_PARSING_ERROR = 40408;
    bc.reasonCodes.ITUNES_NULL_RESPONSE = 40409;
    bc.reasonCodes.ITUNES_RESPONSE_WITH_NULL_STATUS = 40410;
    bc.reasonCodes.ITUNES_STATUS_BAD_JSON_RECEIPT = 40411;
    bc.reasonCodes.ITUNES_STATUS_BAD_RECEIPT = 40412;
    bc.reasonCodes.ITUNES_STATUS_RECEIPT_NOT_AUTHENTICATED = 40413;
    bc.reasonCodes.ITUNES_STATUS_BAD_SHARED_SECRET = 40414;
    bc.reasonCodes.ITUNES_STATUS_RECEIPT_SERVER_UNAVAILABLE = 40415;
    bc.reasonCodes.ITUNES_RECEIPT_MISSING_ITUNES_PRODUCT_ID = 40416;
    bc.reasonCodes.PRODUCT_NOT_FOUND_FOR_ITUNES_PRODUCT_ID = 40417;
    bc.reasonCodes.DATA_STREAM_EVENTS_NOT_ENABLED = 40418;
    bc.reasonCodes.INVALID_DEVICE_TOKEN = 40419;
    bc.reasonCodes.ERROR_DELETING_DEVICE_TOKEN = 40420;
    bc.reasonCodes.WEBPURIFY_NOT_CONFIGURED = 40421;
    bc.reasonCodes.WEBPURIFY_EXCEPTION = 40422;
    bc.reasonCodes.WEBPURIFY_FAILURE = 40423;
    bc.reasonCodes.WEBPURIFY_NOT_ENABLED = 40424;
    bc.reasonCodes.NAME_CONTAINS_PROFANITY = 40425;
    bc.reasonCodes.NULL_SESSION = 40426;
    bc.reasonCodes.PURCHASE_ALREADY_VERIFIED = 40427;
    bc.reasonCodes.GOOGLE_IAP_NOT_CONFIGURED = 40428;
    bc.reasonCodes.UPLOAD_FILE_TOO_LARGE = 40429;
    bc.reasonCodes.FILE_ALREADY_EXISTS = 40430;
    bc.reasonCodes.CLOUD_STORAGE_SERVICE_ERROR = 40431;
    bc.reasonCodes.FILE_DOES_NOT_EXIST = 40432;
    bc.reasonCodes.UPLOAD_ID_MISSING = 40433;
    bc.reasonCodes.UPLOAD_JOB_MISSING = 40434;
    bc.reasonCodes.UPLOAD_JOB_EXPIRED = 40435;
    bc.reasonCodes.UPLOADER_EXCEPTION = 40436;
    bc.reasonCodes.UPLOADER_FILESIZE_MISMATCH = 40437;
    bc.reasonCodes.PUSH_NOTIFICATIONS_NOT_CONFIGURED = 40438;
    bc.reasonCodes.MATCHMAKING_FILTER_SCRIPT_FAILURE = 40439;
    bc.reasonCodes.ACCOUNT_ALREADY_EXISTS = 40440;
    bc.reasonCodes.PROFILE_ALREADY_EXISTS = 40441;
    bc.reasonCodes.MISSING_NOTIFICATION_BODY = 40442;
    bc.reasonCodes.INVALID_SERVICE_CODE = 40443;
    bc.reasonCodes.IP_ADDRESS_BLOCKED = 40444;
    bc.reasonCodes.UNAPPROVED_SERVICE_CODE = 40445;
    bc.reasonCodes.PROFILE_NOT_FOUND = 40446;
    bc.reasonCodes.ENTITY_NOT_SHARED = 40447;
    bc.reasonCodes.SELF_FRIEND = 40448;
    bc.reasonCodes.PARSE_NOT_CONFIGURED = 40449;
    bc.reasonCodes.PARSE_NOT_ENABLED = 40450;
    bc.reasonCodes.PARSE_REQUEST_ERROR = 40451;
    bc.reasonCodes.GROUP_CANNOT_ADD_OWNER = 40452;
    bc.reasonCodes.NOT_GROUP_MEMBER = 40453;
    bc.reasonCodes.INVALID_GROUP_ROLE = 40454;
    bc.reasonCodes.GROUP_OWNER_DELETE = 40455;
    bc.reasonCodes.NOT_INVITED_GROUP_MEMBER = 40456;
    bc.reasonCodes.GROUP_IS_FULL = 40457;
    bc.reasonCodes.GROUP_OWNER_CANNOT_LEAVE = 40458;
    bc.reasonCodes.INVALID_INCREMENT_VALUE = 40459;
    bc.reasonCodes.GROUP_VERSION_MISMATCH = 40460;
    bc.reasonCodes.GROUP_ENTITY_VERSION_MISMATCH = 40461;
    bc.reasonCodes.INVALID_GROUP_ID = 40462;
    bc.reasonCodes.INVALID_FIELD_NAME = 40463;
    bc.reasonCodes.UNSUPPORTED_AUTH_TYPE = 40464;
    bc.reasonCodes.CLOUDCODE_JOB_NOT_FOUND = 40465;
    bc.reasonCodes.CLOUDCODE_JOB_NOT_SCHEDULED = 40466;
    bc.reasonCodes.GROUP_TYPE_NOT_FOUND = 40467;
    bc.reasonCodes.MATCHING_GROUPS_NOT_FOUND = 40468;
    bc.reasonCodes.GENERATE_CDN_URL_ERROR = 40469;
    bc.reasonCodes.INVALID_PROFILE_IDS = 40470;
    bc.reasonCodes.MAX_PROFILE_IDS_EXCEEDED = 40471;
    bc.reasonCodes.PROFILE_ID_MISMATCH = 40472;
    bc.reasonCodes.LEADERBOARD_DOESNOT_EXIST = 40473;
    bc.reasonCodes.APP_LICENSING_EXCEEDED = 40474;
    bc.reasonCodes.SENDGRID_NOT_INSTALLED = 40475;
    bc.reasonCodes.SENDGRID_EMAIL_SEND_ERROR = 40476;
    bc.reasonCodes.SENDGRID_NOT_ENABLED_FOR_APP = 40477;
    bc.reasonCodes.SENDGRID_GET_TEMPLATES_ERROR = 40478;
    bc.reasonCodes.SENDGRID_INVALID_API_KEY = 40479;
    bc.reasonCodes.EMAIL_SERVICE_NOT_CONFIGURED = 40480;
    bc.reasonCodes.INVALID_EMAIL_TEMPLATE_TYPE = 40481;
    bc.reasonCodes.SENDGRID_KEY_EMPTY_OR_NULL = 40482;
    bc.reasonCodes.BODY_TEMPLATE_CANNOT_COEXIST = 40483;
    bc.reasonCodes.SUBSTITUTION_BODY_CANNOT_COEXIST = 40484;
    bc.reasonCodes.INVALID_FROM_ADDRESS = 40485;
    bc.reasonCodes.INVALID_FROM_NAME = 40486;
    bc.reasonCodes.INVALID_REPLY_TO_ADDRESS = 40487;
    bc.reasonCodes.INVALID_REPLY_TO_NAME = 40488;
    bc.reasonCodes.FROM_NAME_WITHOUT_FROM_ADDRESS = 40489;
    bc.reasonCodes.REPLY_TO_NAME_WITHOUT_REPLY_TO_ADDRESS = 40490;
    bc.reasonCodes.CURRENCY_SECURITY_ERROR = 40491;
    bc.reasonCodes.INVALID_PEER_CODE = 40492;
    bc.reasonCodes.PEER_NO_LONGER_EXISTS = 40493;
    bc.reasonCodes.CANNOT_MODIFY_TOURNAMENT_WITH_LEADERBOARD_SERVICE = 40494;
    bc.reasonCodes.NO_TOURNAMENT_ASSOCIATED_WITH_LEADERBOARD = 40495;
    bc.reasonCodes.TOURNAMENT_NOT_ASSOCIATED_WITH_LEADERBOARD = 40496;
    bc.reasonCodes.PLAYER_ALREADY_TOURNAMENT_FOR_LEADERBOARD = 40497;
    bc.reasonCodes.PLAYER_EARLY_FOR_JOINING_TOURNAMENT = 40498;
    bc.reasonCodes.NO_LEADERBOARD_FOUND = 40499;
    bc.reasonCodes.PLAYER_NOT_IN_TIME_RANGE_FOR_POSTSCORE_TOURNAMENT = 40500;
    bc.reasonCodes.LEADERBOARD_ID_BAD = 40501;
    bc.reasonCodes.SCORE_INPUT_BAD = 40502;
    bc.reasonCodes.ROUND_STARTED_EPOCH_INPUT_BAD = 40503;
    bc.reasonCodes.TOURNAMENT_CODE_INPUT_BAD = 40504;
    bc.reasonCodes.PLAYER_NOT_ENROLLED_IN_TOURNAMENT = 40505;
    bc.reasonCodes.LEADERBOARD_VERSION_ID_INVALID = 40506;
    bc.reasonCodes.NOT_ENOUGH_BALANCE_TO_JOIN_TOURNAMENT = 40507;
    bc.reasonCodes.PARENT_ALREADY_ATTACHED = 40508;
    bc.reasonCodes.PEER_ALREADY_ATTACHED = 40509;
    bc.reasonCodes.IDENTITY_NOT_ATTACHED_WITH_PARENT = 40510;
    bc.reasonCodes.IDENTITY_NOT_ATTACHED_WITH_PEER = 40511;
    bc.reasonCodes.LEADERBOARD_SCORE_UPDATE_ERROR = 40512;
    bc.reasonCodes.ERROR_CLAIMING_REWARD = 40513;
    bc.reasonCodes.NOT_ENOUGH_PARENT_BALANCE_TO_JOIN_TOURNAMENT = 40514;
    bc.reasonCodes.NOT_ENOUGH_PEER_BALANCE_TO_JOIN_TOURNAMENT = 40515;
    bc.reasonCodes.PLAYER_LATE_FOR_JOINING_TOURNAMENT = 40516;
    bc.reasonCodes.VIEWING_REWARD_FOR_NON_PROCESSED_TOURNAMENTS = 40517;
    bc.reasonCodes.NO_REWARD_ASSOCIATED_WITH_LEADERBOARD = 40518;
    bc.reasonCodes.PROFILE_PEER_NOT_FOUND = 40519;
    bc.reasonCodes.LEADERBOARD_IN_ACTIVE_STATE = 40520;
    bc.reasonCodes.LEADERBOARD_IN_CALCULATING_STATE = 40521;
    bc.reasonCodes.TOURNAMENT_RESULT_PROCESSING_FAILED = 40522;
    bc.reasonCodes.TOURNAMENT_REWARDS_ALREADY_CLAIMED = 40523;
    bc.reasonCodes.NO_TOURNAMENT_FOUND = 40524;
    bc.reasonCodes.UNEXPECTED_ERROR_RANK_ZERO_AFTER_PROCESSING = 40525;
    bc.reasonCodes.UNEXPECTED_ERROR_DELETING_TOURNAMENT_LEADERBOARD_SCORE = 40526;
    bc.reasonCodes.INVALID_RUN_STATE = 40527;
    bc.reasonCodes.LEADERBOARD_SCORE_DOESNOT_EXIST = 40528;
    bc.reasonCodes.INITIAL_SCORE_NULL = 40529;
    bc.reasonCodes.TOURNAMENT_NOTIFICATIONS_PROCESSING_FAILED = 40530;
    bc.reasonCodes.ACL_NOT_READABLE = 40531;
    bc.reasonCodes.INVALID_OWNER_ID = 40532;
    bc.reasonCodes.IMPORT_MISSING_PEERS_DATA = 40533;
    bc.reasonCodes.INVALID_CREDENTIAL = 40534;
    bc.reasonCodes.GLOBAL_ENTITY_SECURITY_ERROR = 40535;
    bc.reasonCodes.LEADERBOARD_SECURITY_ERROR = 40536;
    bc.reasonCodes.NOT_A_SYSTEM_ENTITY = 40537;
    bc.reasonCodes.CONTROLLER_ERROR = 40538;
    bc.reasonCodes.EVENT_MISSING = 40539;
    bc.reasonCodes.INVALID_XP_LEVEL = 40540;
    bc.reasonCodes.INVALID_ITUNES_ID = 40541;
    bc.reasonCodes.IMPORT_ERROR = 40542;
    bc.reasonCodes.INVALID_ENTITY_TYPE = 40543;
    bc.reasonCodes.FORM_ERROR = 40544;
    bc.reasonCodes.INVALID_PARENT = 40545;
    bc.reasonCodes.INVALID_CURRENCY = 40546;
    bc.reasonCodes.INVALID_THRESHHOLD = 40547;
    bc.reasonCodes.MATCH_ALREADY_EXISTS = 40548;
    bc.reasonCodes.FRIEND_NOT_FOUND = 40549;
    bc.reasonCodes.MATCH_NOT_FOUND = 40550;
    bc.reasonCodes.MATCH_COMPLETE = 40551;
    bc.reasonCodes.MATCH_NOT_STARTED = 40552;
    bc.reasonCodes.MATCH_EXPIRED = 40553;
    bc.reasonCodes.PLAYER_NOT_IN_MATCH = 40554;
    bc.reasonCodes.INVALID_MATCH_VERSION = 40555;
    bc.reasonCodes.INVALID_TURN_VERSION = 40556;
    bc.reasonCodes.INVALID_DEVICE_TYPE = 40557;
    bc.reasonCodes.DUPLICATE_ENTITY = 40558;
    bc.reasonCodes.DUPLICATE_EVENT = 40559;
    bc.reasonCodes.INVALID_LEADERBOARD_COUNT = 40560;
    bc.reasonCodes.DUPLICATE_LEADERBOARD = 40561;
    bc.reasonCodes.MICROSOFT_ERROR = 40562;
    bc.reasonCodes.DUPLICATE_TOURNAMENT = 40563;
    bc.reasonCodes.CREATE_SYSTEM_ENTITY_FAILED = 40564;
    bc.reasonCodes.INVALID_MAX_NUM_STREAMS = 40565;
    bc.reasonCodes.INVALID_PACKET_ID = 40566;
    bc.reasonCodes.HOOK_ERROR = 40567;
    bc.reasonCodes.INVALID_STREAM_ID = 40568;
    bc.reasonCodes.INVALID_SCAN_CODE = 40569;
    bc.reasonCodes.NO_CUSTOM_ENTITY_CONFIG_FOUND = 40570;
    bc.reasonCodes.NO_CUSTOM_ENTITY_FOUND = 40571;
    bc.reasonCodes.CLOUD_STORAGE_ERROR = 40572;
    bc.reasonCodes.NO_CUSTOM_FIELD_CONFIG_FOUND = 40573;
    bc.reasonCodes.MISSING_CUSTOM_ENTITY_QUERY = 40574;
    bc.reasonCodes.INVALID_CUSTOM_ENTITY_JSON_WHERE = 40575;
    bc.reasonCodes.INVALID_CUSTOM_ENTITY_JSON_FIELDS = 40576;
    bc.reasonCodes.ENTITY_ID_NOT_CONFIGURED = 40577;
    bc.reasonCodes.UNCONFIGURED_CUSTOM_FIELD_ERROR = 40578;
    bc.reasonCodes.CUSTOM_ENTITY_SECURITY_ERROR = 40579;
    bc.reasonCodes.CUSTOM_ENTITY_PARTIAL_UPDATE_INVALID_DATA = 40580;
    bc.reasonCodes.TOURNAMENT_PLAY_HAS_NOT_STARTED = 40581;
    bc.reasonCodes.TOURNAMENT_PLAY_HAS_ENDED = 40582;
    bc.reasonCodes.NEW_CREDENTIAL_IN_USE = 40583;
    bc.reasonCodes.OLD_CREDENTIAL_NOT_OWNED = 40584;
    bc.reasonCodes.CLOUD_CODE_SECURITY_ERROR = 40585;
    bc.reasonCodes.RTT_SERVER_NOT_FOUND = 40586;
    bc.reasonCodes.RTT_CLIENT_NOT_FOUND = 40587;
    bc.reasonCodes.NO_RTT_SERVERS_AVAILABLE = 40588;
    bc.reasonCodes.PROFILE_SESSION_MISMATCH = 40589;
    bc.reasonCodes.WAITING_FOR_ON_DEMAND_TOURNAMENT_TO_START = 40590;
    bc.reasonCodes.CDN_URLS_NOT_SUPPORTED = 40591;
    bc.reasonCodes.CLOUD_CONTAINER_ERROR = 40592;
    bc.reasonCodes.MESSAGING_FEATURE_NOT_CONFIGURED = 40593;
    bc.reasonCodes.CHAT_FEATURE_NOT_CONFIGURED = 40594;
    bc.reasonCodes.MESSAGE_NOT_FOUND = 40595;
    bc.reasonCodes.COLLECTION_CREATE_DISABLED = 40596;
    bc.reasonCodes.LEADERBAORD_COLLECTION_CREATE_DISABLED = 40597;
    bc.reasonCodes.MESSAGE_VERSION_MISMATCH = 40598;
    bc.reasonCodes.MESSAGEBOX_VERSION_MISMATCH = 40599;
    bc.reasonCodes.MESSAGE_TOO_LARGE = 40600;
    bc.reasonCodes.FEATURE_NOT_ENABLED = 40601;
    bc.reasonCodes.CHANNEL_NOT_FOUND = 40603;
    bc.reasonCodes.MALFORMED_FORM_DATA = 40604;
    bc.reasonCodes.MISSING_LAST_PACKET_RESPONSE = 40605;
    bc.reasonCodes.PACKET_IN_PROGRESS = 40606;
    bc.reasonCodes.LOBBY_MEMBER_NOT_FOUND = 40607;
    bc.reasonCodes.LOBBY_TEAM_NOT_FOUND = 40608;
    bc.reasonCodes.LOBBY_ENTRY_QUEUE_MEMBER_NOT_FOUND = 40609;
    bc.reasonCodes.INVALID_HEADER_APP_ID = 40610;
    bc.reasonCodes.LOBBY_TYPE_NOT_FOUND = 40611;
    bc.reasonCodes.LOBBY_TEAM_FULL = 40612;
    bc.reasonCodes.LOBBY_NOT_FOUND = 40613;
    bc.reasonCodes.MESSAGE_CONTENT_INVALID_JSON = 40614;
    bc.reasonCodes.RTT_FEATURE_NOT_CONFIGURED = 40615;
    bc.reasonCodes.CLOUD_CODE_ONLY_METHOD = 40616;
    bc.reasonCodes.MESSAGE_FROM_JSON_ID_MUST_BE_NULL = 40617;
    bc.reasonCodes.MESSAGE_FROM_JSON_NAME_MANDATORY = 40618;
    bc.reasonCodes.INVALID_LOBBY_STEP_ALIGNMENT = 40619;
    bc.reasonCodes.INVALID_LOBBY_STEP_STRATEGY = 40620;
    bc.reasonCodes.MESSAGING_MAX_RECIPIENTS_EXCEEDED = 40621;
    bc.reasonCodes.LOBBY_FEATURE_NOT_CONFIGURED = 40622;
    bc.reasonCodes.TOO_MANY_USERS_FOR_TEAM = 40623;
    bc.reasonCodes.TOO_MANY_USERS_FOR_LOBBY_TYPE = 40624;
    bc.reasonCodes.DIVISION_SET_DOESNOT_EXIST = 40625;
    bc.reasonCodes.LOBBY_CONFIG_NOT_FOUND = 40626;
    bc.reasonCodes.PRESENCE_NOT_INITIALIZED = 40627;
    bc.reasonCodes.PRESENCE_FEATURE_NOT_CONFIGURED = 40628;
    bc.reasonCodes.PLAYER_ALREADY_IN_ACTIVE_DIVISION_SET = 40629;
    bc.reasonCodes.TOURNAMENT_CODE_MISSING = 40630;
    bc.reasonCodes.ERROR_ASSIGNING_DIVISION_SET_INSTANCE = 40631;
    bc.reasonCodes.LEADERBOARD_NOT_DIVISION_SET_INSTANCE = 40632;
    bc.reasonCodes.DIVISION_SET_SCHEDULING_TYPE_DOES_NOT_EXIST = 40633;
    bc.reasonCodes.PRESENCE_ACTIVITY_NOT_ENABLED = 40634;
    bc.reasonCodes.PRESENCE_REALTIME_NOT_ENABLED = 40635;
    bc.reasonCodes.DIVISION_SET_MAX_SIZE_REACHED = 40636;
    bc.reasonCodes.DIVISION_SET_INFO_ERROR = 40637;
    bc.reasonCodes.DIVISION_SET_API_MUST_BE_USED = 40638;
    bc.reasonCodes.API_CALL_REJECTED = 40639;
    bc.reasonCodes.LEADERBOARD_TOURNAMENT_TEMPLATE_ONLY = 40640;
    bc.reasonCodes.INVALID_TOURNAMENT_JOB_ID = 40641;
    bc.reasonCodes.LEADERBOARD_ROTATION_ERROR = 40642;
    bc.reasonCodes.INVALID_STORE_ID = 40700;
    bc.reasonCodes.METHOD_DEPRECATED = 40701;
    bc.reasonCodes.INVALID_BILLING_PROVIDER_ID = 40702;
    bc.reasonCodes.NO_TWITTER_CONSUMER_KEY = 500001;
    bc.reasonCodes.NO_TWITTER_CONSUMER_SECRET = 500002;
    bc.reasonCodes.INVALID_CONFIGURATION = 500003;
    bc.reasonCodes.ERROR_GETTING_REQUEST_TOKEN = 500004;
    bc.reasonCodes.ERROR_GETTING_ACCESS_TOKEN = 500005;
    bc.reasonCodes.TWITTER_AUTH_ERROR = 500006;
    bc.reasonCodes.TWITTER_ERROR = 500007;
    bc.reasonCodes.FACEBOOK_ERROR = 500010;
    bc.reasonCodes.FACEBOOK_SECRET_MISMATCH = 500011;
    bc.reasonCodes.FACEBOOK_AUTHENTICATION_ERROR = 500012;
    bc.reasonCodes.FACEBOOK_APPLICATION_TOKEN_REQUEST_ERROR = 500013;
    bc.reasonCodes.FACEBOOK_BAD_APPLICATION_TOKEN_SIGNATURE = 500014;
    bc.reasonCodes.NOT_TEAM_ADMIN = 550000;
    bc.reasonCodes.NO_TEAM_ACCESS = 550001;
    bc.reasonCodes.MISSING_COMPANY_RECORD = 550002;
    bc.reasonCodes.TEAM_MEMBER_NOT_FOUND = 550003;
    bc.reasonCodes.TEAM_MEMBER_NOT_ENABLED = 550004;
    bc.reasonCodes.TEAM_MEMBER_NOT_ACTIVE = 550005;
    bc.reasonCodes.TEAM_MEMBER_LOCKED = 550006;
    bc.reasonCodes.INVALID_PASSWORD = 550007;
    bc.reasonCodes.TOKEN_INVALID = 550008;
    bc.reasonCodes.TOKEN_EXPIRED = 550009;
    bc.reasonCodes.APP_NOT_FOUND = 550010;
    bc.reasonCodes.TEMPLATE_GAME_NOT_FOUND = 550011;
    bc.reasonCodes.INVALID_TEMPLATE_GAME_TEAM = 550012;
    bc.reasonCodes.BASIC_AUTH_FAILURE = 550013;
    bc.reasonCodes.MONGO_DB_EXCEPTION = 600001;
    bc.reasonCodes.CONCURRENT_LOCK_ERROR = 600002;
    bc.reasonCodes.CLIENT_NETWORK_ERROR_TIMEOUT = 90001;
    bc.reasonCodes.CLIENT_UPLOAD_FILE_CANCELLED = 90100;
    bc.reasonCodes.CLIENT_UPLOAD_FILE_TIMED_OUT = 90101;
    bc.reasonCodes.CLIENT_UPLOAD_FILE_UNKNOWN = 90102;
    bc.reasonCodes.CLIENT_DISABLED = 90200;
}

BCReasonCodes.apply(window.brainCloudClient = window.brainCloudClient || {});
