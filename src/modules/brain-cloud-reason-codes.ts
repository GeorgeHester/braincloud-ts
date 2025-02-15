export class BrainCloudReasonCodes
{
    public static codes: { [key: string]: number; } = {
        "NO_REASON_CODE": 0,
        "INVALID_NOTIFICATION": 20200,
        "INVALID_REQUEST": 40001,
        "CREATING_FACEBOOK_MEMORY": 40200,
        "SWITCHING_FACEBOOK_MEMORY": 40201,
        "MERGING_MEMORY": 40202,
        "RECREATING_ANONYMOUS_MEMORY": 40203,
        "MOVING_ANONYMOUS_MEMORY": 40204,
        "LOGIN_SECURITY_ERROR": 40205,
        "MISSING_IDENTITY_ERROR": 40206,
        "SWITCHING_PROFILES": 40207,
        "MISSING_PROFILE_ERROR": 40208,
        "SECURITY_ERROR": 40209,
        "DOWNGRADING_TO_ANONYMOUS_ERROR": 40210,
        "DUPLICATE_IDENTITY_TYPE": 40211,
        "MERGE_PROFILES": 40212,
        "INVALID_PROPERTY_NAME": 40213,
        "EMAIL_NOT_VALIDATED": 40214,
        "DATABASE_ERROR": 40215,
        "PROPERTY_NOT_OVERRIDEABLE": 40216,
        "UNKNOWN_AUTH_ERROR": 40217,
        "DATABASE_INPUT_TOO_LARGE_ERROR": 40218,
        "MISSING_APP_EMAIL_ACCOUNT": 40219,
        "DATABASE_DUP_KEY_ERROR": 40220,
        "EMAIL_NOT_VALID": 40221,
        "UNABLE_TO_GET_FRIENDS_FROM_FACEBOOK": 40300,
        "BAD_SIGNATURE": 40301,
        "UNABLE_TO_VALIDATE_PLAYER": 40302,
        "PLAYER_SESSION_EXPIRED": 40303,
        "NO_SESSION": 40304,
        "PLAYER_SESSION_MISMATCH": 40305,
        "OPERATION_REQUIRES_A_SESSION": 40306,
        "TOKEN_DOES_NOT_MATCH_USER": 40307,
        "MANUAL_REDIRECT": 40308,
        "EVENT_CAN_ONLY_SEND_TO_FRIEND_OR_SELF": 40309,
        "NOT_FRIENDS": 40310,
        "VC_BALANCE_CANNOT_BE_SPECIFIED": 40311,
        "VC_LIMIT_EXCEEDED": 40312,
        "UNABLE_TO_GET_MY_DATA_FROM_FACEBOOK": 40313,
        "TLS_VERSION_INVALID": 40314,
        "INVALID_AUTHENTICATION_TYPE": 40315,
        "INVALID_GAME_ID": 40316,
        "APPLE_TRANS_ID_ALREADY_CLAIMED": 40317,
        "CLIENT_VERSION_NOT_SUPPORTED": 40318,
        "BRAINCLOUD_VERSION_NOT_SUPPORTED": 40319,
        "PLATFORM_NOT_SUPPORTED": 40320,
        "INVALID_PLAYER_STATISTICS_EVENT_NAME": 40321,
        "GAME_VERSION_NOT_SUPPORTED": 40322,
        "BAD_REFERENCE_DATA": 40324,
        "MISSING_OAUTH_TOKEN": 40325,
        "MISSING_OAUTH_VERIFIER": 40326,
        "MISSING_OAUTH_TOKEN_SECRET": 40327,
        "MISSING_TWEET": 40328,
        "FACEBOOK_PAYMENT_ID_ALREADY_PROCESSED": 40329,
        "DISABLED_GAME": 40330,
        "MATCH_MAKING_DISABLED": 40331,
        "UPDATE_FAILED": 40332,
        "INVALID_OPERATION": 40333,
        "MATCH_RANGE_ERROR": 40334,
        "PLAYER_IN_MATCH": 40335,
        "MATCH_PLAYER_SHIELDED": 40336,
        "MATCH_PLAYER_MISSING": 40337,
        "MATCH_PLAYER_LOGGED_IN": 40338,
        "INVALID_ITEM_ID": 40339,
        "MISSING_PRICE": 40340,
        "MISSING_USER_INFO": 40341,
        "MISSING_STEAM_RESPONSE": 40342,
        "MISSING_STEAM_TRANSACTION": 40343,
        "ENTITY_VERSION_MISMATCH": 40344,
        "MISSING_RECORD": 40345,
        "INSUFFICIENT_PERMISSIONS": 40346,
        "MISSING_IN_QUERY": 40347,
        "INVALID_DATABASE_FIELD_NAME": 40347,
        "RECORD_EXPIRED": 40348,
        "INVALID_WHERE": 40349,
        "S3_ERROR": 40350,
        "INVALID_ATTRIBUTES": 40351,
        "IMPORT_MISSING_GAME_DATA": 40352,
        "IMPORT_SCHEMA_VERSION_TOO_OLD": 40353,
        "IMPORT_SCHEMA_VERSION_INVALID": 40355,
        "PLAYER_SESSION_LOGGED_OUT": 40356,
        "API_HOOK_SCRIPT_ERROR": 40357,
        "MISSING_REQUIRED_PARAMETER": 40358,
        "INVALID_PARAMETER_TYPE": 40359,
        "INVALID_IDENTITY_TYPE": 40360,
        "EMAIL_SEND_ERROR": 40361,
        "CHILD_ENTITY_PARTIAL_UPDATE_INVALID_DATA": 40362,
        "MISSING_SCRIPT": 40363,
        "SCRIPT_SECURITY_ERROR": 40364,
        "SERVER_SESSION_EXPIRED": 40365,
        "STREAM_DOES_NOT_EXIT": 40366,
        "STREAM_ACCESS_ERROR": 40367,
        "STREAM_COMPLETE": 40368,
        "INVALID_STATISTIC_NAME": 40369,
        "INVALID_HTTP_REQUEST": 40370,
        "GAME_LIMIT_REACHED": 40371,
        "GAME_RUNSTATE_DISABLED": 40372,
        "INVALID_COMPANY_ID": 40373,
        "INVALID_PLAYER_ID": 40374,
        "INVALID_TEMPLATE_ID": 40375,
        "MINIMUM_SEARCH_INPUT": 40376,
        "MISSING_GAME_PARENT": 40377,
        "GAME_PARENT_MISMATCH": 40378,
        "CHILD_PLAYER_MISSING": 40379,
        "MISSING_PLAYER_PARENT": 40380,
        "PLAYER_PARENT_MISMATCH": 40381,
        "MISSING_PLAYER_ID": 40382,
        "DECODE_CONTEXT": 40383,
        "INVALID_QUERY_CONTEXT": 40384,
        "INVALID_AMOUNT": 40385,
        "GROUP_MEMBER_NOT_FOUND": 40385,
        "INVALID_SORT": 40386,
        "GAME_NOT_FOUND": 40387,
        "GAMES_NOT_IN_SAME_COMPANY": 40388,
        "IMPORT_NO_PARENT_ASSIGNED": 40389,
        "IMPORT_PARENT_CURRENCIES_MISMATCH": 40390,
        "INVALID_SUBSTITUION_ENTRY": 40391,
        "INVALID_TEMPLATE_STRING": 40392,
        "TEMPLATE_SUBSTITUTION_ERROR": 40393,
        "INVALID_OPPONENTS": 40394,
        "REDEMPTION_CODE_NOT_FOUND": 40395,
        "REDEMPTION_CODE_VERSION_MISMATCH": 40396,
        "REDEMPTION_CODE_ACTIVE": 40397,
        "REDEMPTION_CODE_NOT_ACTIVE": 40398,
        "REDEMPTION_CODE_TYPE_NOT_FOUND": 40399,
        "REDEMPTION_CODE_INVALID": 40400,
        "REDEMPTION_CODE_REDEEMED": 40401,
        "REDEMPTION_CODE_REDEEMED_BY_SELF": 40402,
        "REDEMPTION_CODE_REDEEMED_BY_OTHER": 40403,
        "SCRIPT_EMPTY": 40404,
        "ITUNES_COMMUNICATION_ERROR": 40405,
        "ITUNES_NO_RESPONSE": 40406,
        "ITUNES_RESPONSE_NOT_OK": 40407,
        "JSON_PARSING_ERROR": 40408,
        "ITUNES_NULL_RESPONSE": 40409,
        "ITUNES_RESPONSE_WITH_NULL_STATUS": 40410,
        "ITUNES_STATUS_BAD_JSON_RECEIPT": 40411,
        "ITUNES_STATUS_BAD_RECEIPT": 40412,
        "ITUNES_STATUS_RECEIPT_NOT_AUTHENTICATED": 40413,
        "ITUNES_STATUS_BAD_SHARED_SECRET": 40414,
        "ITUNES_STATUS_RECEIPT_SERVER_UNAVAILABLE": 40415,
        "ITUNES_RECEIPT_MISSING_ITUNES_PRODUCT_ID": 40416,
        "PRODUCT_NOT_FOUND_FOR_ITUNES_PRODUCT_ID": 40417,
        "DATA_STREAM_EVENTS_NOT_ENABLED": 40418,
        "INVALID_DEVICE_TOKEN": 40419,
        "ERROR_DELETING_DEVICE_TOKEN": 40420,
        "WEBPURIFY_NOT_CONFIGURED": 40421,
        "WEBPURIFY_EXCEPTION": 40422,
        "WEBPURIFY_FAILURE": 40423,
        "WEBPURIFY_NOT_ENABLED": 40424,
        "NAME_CONTAINS_PROFANITY": 40425,
        "NULL_SESSION": 40426,
        "PURCHASE_ALREADY_VERIFIED": 40427,
        "GOOGLE_IAP_NOT_CONFIGURED": 40428,
        "UPLOAD_FILE_TOO_LARGE": 40429,
        "FILE_ALREADY_EXISTS": 40430,
        "CLOUD_STORAGE_SERVICE_ERROR": 40431,
        "FILE_DOES_NOT_EXIST": 40432,
        "UPLOAD_ID_MISSING": 40433,
        "UPLOAD_JOB_MISSING": 40434,
        "UPLOAD_JOB_EXPIRED": 40435,
        "UPLOADER_EXCEPTION": 40436,
        "UPLOADER_FILESIZE_MISMATCH": 40437,
        "PUSH_NOTIFICATIONS_NOT_CONFIGURED": 40438,
        "MATCHMAKING_FILTER_SCRIPT_FAILURE": 40439,
        "ACCOUNT_ALREADY_EXISTS": 40440,
        "PROFILE_ALREADY_EXISTS": 40441,
        "MISSING_NOTIFICATION_BODY": 40442,
        "INVALID_SERVICE_CODE": 40443,
        "IP_ADDRESS_BLOCKED": 40444,
        "UNAPPROVED_SERVICE_CODE": 40445,
        "PROFILE_NOT_FOUND": 40446,
        "ENTITY_NOT_SHARED": 40447,
        "SELF_FRIEND": 40448,
        "PARSE_NOT_CONFIGURED": 40449,
        "PARSE_NOT_ENABLED": 40450,
        "PARSE_REQUEST_ERROR": 40451,
        "GROUP_CANNOT_ADD_OWNER": 40452,
        "NOT_GROUP_MEMBER": 40453,
        "INVALID_GROUP_ROLE": 40454,
        "GROUP_OWNER_DELETE": 40455,
        "NOT_INVITED_GROUP_MEMBER": 40456,
        "GROUP_IS_FULL": 40457,
        "GROUP_OWNER_CANNOT_LEAVE": 40458,
        "INVALID_INCREMENT_VALUE": 40459,
        "GROUP_VERSION_MISMATCH": 40460,
        "GROUP_ENTITY_VERSION_MISMATCH": 40461,
        "INVALID_GROUP_ID": 40462,
        "INVALID_FIELD_NAME": 40463,
        "UNSUPPORTED_AUTH_TYPE": 40464,
        "CLOUDCODE_JOB_NOT_FOUND": 40465,
        "CLOUDCODE_JOB_NOT_SCHEDULED": 40466,
        "GROUP_TYPE_NOT_FOUND": 40467,
        "MATCHING_GROUPS_NOT_FOUND": 40468,
        "GENERATE_CDN_URL_ERROR": 40469,
        "INVALID_PROFILE_IDS": 40470,
        "MAX_PROFILE_IDS_EXCEEDED": 40471,
        "PROFILE_ID_MISMATCH": 40472,
        "LEADERBOARD_DOESNOT_EXIST": 40473,
        "APP_LICENSING_EXCEEDED": 40474,
        "SENDGRID_NOT_INSTALLED": 40475,
        "SENDGRID_EMAIL_SEND_ERROR": 40476,
        "SENDGRID_NOT_ENABLED_FOR_APP": 40477,
        "SENDGRID_GET_TEMPLATES_ERROR": 40478,
        "SENDGRID_INVALID_API_KEY": 40479,
        "EMAIL_SERVICE_NOT_CONFIGURED": 40480,
        "INVALID_EMAIL_TEMPLATE_TYPE": 40481,
        "SENDGRID_KEY_EMPTY_OR_NULL": 40482,
        "BODY_TEMPLATE_CANNOT_COEXIST": 40483,
        "SUBSTITUTION_BODY_CANNOT_COEXIST": 40484,
        "INVALID_FROM_ADDRESS": 40485,
        "INVALID_FROM_NAME": 40486,
        "INVALID_REPLY_TO_ADDRESS": 40487,
        "INVALID_REPLY_TO_NAME": 40488,
        "FROM_NAME_WITHOUT_FROM_ADDRESS": 40489,
        "REPLY_TO_NAME_WITHOUT_REPLY_TO_ADDRESS": 40490,
        "CURRENCY_SECURITY_ERROR": 40491,
        "INVALID_PEER_CODE": 40492,
        "PEER_NO_LONGER_EXISTS": 40493,
        "CANNOT_MODIFY_TOURNAMENT_WITH_LEADERBOARD_SERVICE": 40494,
        "NO_TOURNAMENT_ASSOCIATED_WITH_LEADERBOARD": 40495,
        "TOURNAMENT_NOT_ASSOCIATED_WITH_LEADERBOARD": 40496,
        "PLAYER_ALREADY_TOURNAMENT_FOR_LEADERBOARD": 40497,
        "PLAYER_EARLY_FOR_JOINING_TOURNAMENT": 40498,
        "NO_LEADERBOARD_FOUND": 40499,
        "PLAYER_NOT_IN_TIME_RANGE_FOR_POSTSCORE_TOURNAMENT": 40500,
        "LEADERBOARD_ID_BAD": 40501,
        "SCORE_INPUT_BAD": 40502,
        "ROUND_STARTED_EPOCH_INPUT_BAD": 40503,
        "TOURNAMENT_CODE_INPUT_BAD": 40504,
        "PLAYER_NOT_ENROLLED_IN_TOURNAMENT": 40505,
        "LEADERBOARD_VERSION_ID_INVALID": 40506,
        "NOT_ENOUGH_BALANCE_TO_JOIN_TOURNAMENT": 40507,
        "PARENT_ALREADY_ATTACHED": 40508,
        "PEER_ALREADY_ATTACHED": 40509,
        "IDENTITY_NOT_ATTACHED_WITH_PARENT": 40510,
        "IDENTITY_NOT_ATTACHED_WITH_PEER": 40511,
        "LEADERBOARD_SCORE_UPDATE_ERROR": 40512,
        "ERROR_CLAIMING_REWARD": 40513,
        "NOT_ENOUGH_PARENT_BALANCE_TO_JOIN_TOURNAMENT": 40514,
        "NOT_ENOUGH_PEER_BALANCE_TO_JOIN_TOURNAMENT": 40515,
        "PLAYER_LATE_FOR_JOINING_TOURNAMENT": 40516,
        "VIEWING_REWARD_FOR_NON_PROCESSED_TOURNAMENTS": 40517,
        "NO_REWARD_ASSOCIATED_WITH_LEADERBOARD": 40518,
        "PROFILE_PEER_NOT_FOUND": 40519,
        "LEADERBOARD_IN_ACTIVE_STATE": 40520,
        "LEADERBOARD_IN_CALCULATING_STATE": 40521,
        "TOURNAMENT_RESULT_PROCESSING_FAILED": 40522,
        "TOURNAMENT_REWARDS_ALREADY_CLAIMED": 40523,
        "NO_TOURNAMENT_FOUND": 40524,
        "UNEXPECTED_ERROR_RANK_ZERO_AFTER_PROCESSING": 40525,
        "UNEXPECTED_ERROR_DELETING_TOURNAMENT_LEADERBOARD_SCORE": 40526,
        "INVALID_RUN_STATE": 40527,
        "LEADERBOARD_SCORE_DOESNOT_EXIST": 40528,
        "INITIAL_SCORE_NULL": 40529,
        "TOURNAMENT_NOTIFICATIONS_PROCESSING_FAILED": 40530,
        "ACL_NOT_READABLE": 40531,
        "INVALID_OWNER_ID": 40532,
        "IMPORT_MISSING_PEERS_DATA": 40533,
        "INVALID_CREDENTIAL": 40534,
        "GLOBAL_ENTITY_SECURITY_ERROR": 40535,
        "LEADERBOARD_SECURITY_ERROR": 40536,
        "NOT_A_SYSTEM_ENTITY": 40537,
        "CONTROLLER_ERROR": 40538,
        "EVENT_MISSING": 40539,
        "INVALID_XP_LEVEL": 40540,
        "INVALID_ITUNES_ID": 40541,
        "IMPORT_ERROR": 40542,
        "INVALID_ENTITY_TYPE": 40543,
        "FORM_ERROR": 40544,
        "INVALID_PARENT": 40545,
        "INVALID_CURRENCY": 40546,
        "INVALID_THRESHHOLD": 40547,
        "MATCH_ALREADY_EXISTS": 40548,
        "FRIEND_NOT_FOUND": 40549,
        "MATCH_NOT_FOUND": 40550,
        "MATCH_COMPLETE": 40551,
        "MATCH_NOT_STARTED": 40552,
        "MATCH_EXPIRED": 40553,
        "PLAYER_NOT_IN_MATCH": 40554,
        "INVALID_MATCH_VERSION": 40555,
        "INVALID_TURN_VERSION": 40556,
        "INVALID_DEVICE_TYPE": 40557,
        "DUPLICATE_ENTITY": 40558,
        "DUPLICATE_EVENT": 40559,
        "INVALID_LEADERBOARD_COUNT": 40560,
        "DUPLICATE_LEADERBOARD": 40561,
        "MICROSOFT_ERROR": 40562,
        "DUPLICATE_TOURNAMENT": 40563,
        "CREATE_SYSTEM_ENTITY_FAILED": 40564,
        "INVALID_MAX_NUM_STREAMS": 40565,
        "INVALID_PACKET_ID": 40566,
        "HOOK_ERROR": 40567,
        "INVALID_STREAM_ID": 40568,
        "INVALID_SCAN_CODE": 40569,
        "NO_CUSTOM_ENTITY_CONFIG_FOUND": 40570,
        "NO_CUSTOM_ENTITY_FOUND": 40571,
        "CLOUD_STORAGE_ERROR": 40572,
        "NO_CUSTOM_FIELD_CONFIG_FOUND": 40573,
        "MISSING_CUSTOM_ENTITY_QUERY": 40574,
        "INVALID_CUSTOM_ENTITY_JSON_WHERE": 40575,
        "INVALID_CUSTOM_ENTITY_JSON_FIELDS": 40576,
        "ENTITY_ID_NOT_CONFIGURED": 40577,
        "UNCONFIGURED_CUSTOM_FIELD_ERROR": 40578,
        "CUSTOM_ENTITY_SECURITY_ERROR": 40579,
        "CUSTOM_ENTITY_PARTIAL_UPDATE_INVALID_DATA": 40580,
        "TOURNAMENT_PLAY_HAS_NOT_STARTED": 40581,
        "TOURNAMENT_PLAY_HAS_ENDED": 40582,
        "NEW_CREDENTIAL_IN_USE": 40583,
        "OLD_CREDENTIAL_NOT_OWNED": 40584,
        "CLOUD_CODE_SECURITY_ERROR": 40585,
        "RTT_SERVER_NOT_FOUND": 40586,
        "RTT_CLIENT_NOT_FOUND": 40587,
        "NO_RTT_SERVERS_AVAILABLE": 40588,
        "PROFILE_SESSION_MISMATCH": 40589,
        "WAITING_FOR_ON_DEMAND_TOURNAMENT_TO_START": 40590,
        "CDN_URLS_NOT_SUPPORTED": 40591,
        "CLOUD_CONTAINER_ERROR": 40592,
        "MESSAGING_FEATURE_NOT_CONFIGURED": 40593,
        "CHAT_FEATURE_NOT_CONFIGURED": 40594,
        "MESSAGE_NOT_FOUND": 40595,
        "COLLECTION_CREATE_DISABLED": 40596,
        "LEADERBAORD_COLLECTION_CREATE_DISABLED": 40597,
        "MESSAGE_VERSION_MISMATCH": 40598,
        "MESSAGEBOX_VERSION_MISMATCH": 40599,
        "MESSAGE_TOO_LARGE": 40600,
        "FEATURE_NOT_ENABLED": 40601,
        "CHANNEL_NOT_FOUND": 40603,
        "MALFORMED_FORM_DATA": 40604,
        "MISSING_LAST_PACKET_RESPONSE": 40605,
        "PACKET_IN_PROGRESS": 40606,
        "LOBBY_MEMBER_NOT_FOUND": 40607,
        "LOBBY_TEAM_NOT_FOUND": 40608,
        "LOBBY_ENTRY_QUEUE_MEMBER_NOT_FOUND": 40609,
        "INVALID_HEADER_APP_ID": 40610,
        "LOBBY_TYPE_NOT_FOUND": 40611,
        "LOBBY_TEAM_FULL": 40612,
        "LOBBY_NOT_FOUND": 40613,
        "MESSAGE_CONTENT_INVALID_JSON": 40614,
        "RTT_FEATURE_NOT_CONFIGURED": 40615,
        "CLOUD_CODE_ONLY_METHOD": 40616,
        "MESSAGE_FROM_JSON_ID_MUST_BE_NULL": 40617,
        "MESSAGE_FROM_JSON_NAME_MANDATORY": 40618,
        "INVALID_LOBBY_STEP_ALIGNMENT": 40619,
        "INVALID_LOBBY_STEP_STRATEGY": 40620,
        "MESSAGING_MAX_RECIPIENTS_EXCEEDED": 40621,
        "LOBBY_FEATURE_NOT_CONFIGURED": 40622,
        "TOO_MANY_USERS_FOR_TEAM": 40623,
        "TOO_MANY_USERS_FOR_LOBBY_TYPE": 40624,
        "DIVISION_SET_DOESNOT_EXIST": 40625,
        "LOBBY_CONFIG_NOT_FOUND": 40626,
        "PRESENCE_NOT_INITIALIZED": 40627,
        "PRESENCE_FEATURE_NOT_CONFIGURED": 40628,
        "PLAYER_ALREADY_IN_ACTIVE_DIVISION_SET": 40629,
        "TOURNAMENT_CODE_MISSING": 40630,
        "ERROR_ASSIGNING_DIVISION_SET_INSTANCE": 40631,
        "LEADERBOARD_NOT_DIVISION_SET_INSTANCE": 40632,
        "DIVISION_SET_SCHEDULING_TYPE_DOES_NOT_EXIST": 40633,
        "PRESENCE_ACTIVITY_NOT_ENABLED": 40634,
        "PRESENCE_REALTIME_NOT_ENABLED": 40635,
        "DIVISION_SET_MAX_SIZE_REACHED": 40636,
        "DIVISION_SET_INFO_ERROR": 40637,
        "DIVISION_SET_API_MUST_BE_USED": 40638,
        "API_CALL_REJECTED": 40639,
        "LEADERBOARD_TOURNAMENT_TEMPLATE_ONLY": 40640,
        "INVALID_TOURNAMENT_JOB_ID": 40641,
        "LEADERBOARD_ROTATION_ERROR": 40642,
        "CLOUD_COMPUTING_ERROR": 40643,
        "DOCKER_ERROR": 40644,
        "ROOM_SERVER_HOST_NOT_FOUND": 40645,
        "INVALID_ATTACHMENT_DATA": 40646,
        "SCRIPT_PARSING_ERROR": 40647,
        "INVALID_LOBBY_STEP_RANGES": 40648,
        "LOG_IN_LOG_ERROR": 40649,
        "CACHE_OBJECT_TOO_LARGE": 40650,
        "IDENTIFY_DORMANT_USERS_FEATURE_NOT_CONFIGURED": 40651,
        "USER_PURGE_NOTICE_NOT_CONFIGURED": 40652,
        "INVALID_CX_ID": 40653,
        "TOO_MANY_CACHE_OBJECTS": 40654,
        "HOSTING_NOT_ENABLED": 40655,
        "UNSUPPORTED_GROUP_LEADERBOARD_OPERATION": 40656,
        "INVALID_PLAYER": 40657,
        "TOO_MANY_LISTENERS": 40658,
        "CREATE_FAILED": 40659,
        "INVALID_PARAMETER_VALUE": 40660,
        "ITEM_VERSION_MISMATCH": 40661,
        "ITEM_PUBLISH_ERROR": 40662,
        "ITEM_NOT_FOUND": 40663,
        "ITEM_NO_USES": 40664,
        "ITEM_CREATE_ERROR": 40665,
        "ITEM_COOL_DOWN": 40666,
        "TASK_STATE_NOT_FOUND": 40667,
        "ITEM_UPDATE_ERROR": 40668,
        "ITEM_DELETE_ERROR": 40669,
        "ITEM_INVALID_VALUE": 40670,
        "ITEM_SELL_OR_PURCHASE_REVERSAL_ERROR": 40671,
        "ITEM_GIFTED": 40672,
        "MISSING_APP_CONTEXT": 40673,
        "PUBLIC_KEY_IN_USE": 40674,
        "CUSTOM_ENTITY_NOT_FOUND": 40675,
        "ITEM_GIFTING_ERROR": 40676,
        "ITEM_NOT_AVAILABLE_ON_BLOCKCHAIN": 40677,
        "MISSING_BLOCKCHAIN_INTEGRATION": 40678,
        "MISSING_BLOCKCHAIN_USER_IDENTITY": 40679,
        "STACKABLE_ITEMS_NOT_PERMITTED_ON_BLOCKCHAIN": 40680,
        "BLOCKCHAIN_PUBLISH_IN_PROGRESS": 40681,
        "JWT_VERIFY_ERROR": 40682,
        "USER_ALREADY_EXISTS": 40683,
        "INVALID_EXT_AUTH_TYPE": 40684,
        "CUSTOM_ENTITY_INDEX_ERROR": 40685,
        "CUSTOM_ENTITY_UPDATE_FIELDS_ERROR": 40686,
        "INVALID_LOBBY_STEP_ALGOS": 40687,
        "INVALID_COMPOUND_RANGES": 40688,
        "MISSING_COMPOUND_RANGES": 40689,
        "MISSING_PING_DATA": 40690,
        "INVALID_PING_STEP_ALGO": 40691,
        "GROUP_NOT_FOUND": 40692,
        "SCRIPT_UPDATE_FAILED": 40693,
        "CUSTOM_ENTITY_REPLACE_ERROR": 40694,
        "CUSTOM_ENTITY_TYPE_IMPORT_ERROR": 40695,
        "CUSTOM_ENTITY_IMPORT_WARNING": 40696,
        "IDENTIFY_DORMANT_USERS_FOR_EXPORT_NOT_CONFIGURED": 40697,
        "IDENTIFY_DORMANT_USERS_FOR_EXPORT_ERROR": 40698,
        "UPDATE_SINGLETON_FAILED": 40699,
        "INVALID_STORE_ID": 40700,
        "METHOD_DEPRECATED": 40701,
        "INVALID_BILLING_PROVIDER_ID": 40702,
        "INVALID_STORE_DATA": 40703,
        "USER_FILE_MISSING": 40704,
        "GLOBAL_FILE_EXISTS": 40705,
        "INVALID_FILE_NAME": 40706,
        "FILE_TREE_VERSION_MISMATCH": 40707,
        "FILE_TREE_FOLDER_MISSING": 40708,
        "FOLDER_ALREADY_EXISTS": 40709,
        "INVALID_TREE_ID": 40710,
        "FILE_VERSION_MISMATCH": 40711,
        "INVALID_FOLDER_PATH": 40712,
        "FILENAME_MISMATCH": 40713,
        "FOLDERPATH_MISMATCH": 40714,
        "INVALID_CHARS_IN_STRING": 40715,
        "FOLDER_NOT_EMPTY": 40716,
        "INVALID_IMAGE_URL": 40717,
        "UNABLE_TO_UPDATE_PRICE": 40718,
        "UNABLE_TO_DELETE_PRICE": 40718,
        "WRONG_JOB_TYPE": 40719,
        "CLOUDCODE_JOB_NOT_RUNNING": 40720,
        "SCRIPT_HAS_DEPENDENCIES": 40721,
        "PEER_SERVICE_NOT_PUBLISHED": 40722,
        "MISSING_FOLDER_NAME": 40723,
        "UPLOLAD_IN_PROGRESS": 40724,
        "REFRESH_IN_PROGRESS": 40725,
        "REFRESH_INTERRUPTED": 40726,
        "GAMELIFT_ERROR": 40727,
        "GAMELIFT_LAUNCH_ERROR": 40728,
        "MAX_HOSTED_SERVERS_REACHED": 40729,
        "DUPLICATE_PACKET_ID": 40730,
        "FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN": 40731,
        "NO_FRIENDS_FOUND": 40740,
        "PRODUCT_TRANSACTION_NOT_FOUND": 40741,
        "ITEM_DEF_NOT_FOUND": 40742,
        "ITEM_DEF_HAS_DEPENDENCIES": 40743,
        "TRANSFER_JOB_IDLE_TIMEOUT": 40744,
        "GROUP_MEMBER_ACL_MORE_RESTRICTIVE_THAN_OTHER": 40745,
        "GROUP_MEMBER_ACL_MUST_BE_READ_WRITE_FOR_UNOWNED_ENTITY": 40746,
        "GROUP_MEMBER_ACL_REQUIRED": 40747,
        "GROUP_TYPE_MAX_MEMBERS_EXCEEDED": 40748,
        "REQUEST_FAILED": 40801,
        "RESET_QUESTS_FAILED": 40802,
        "RESET_ALL_QUESTS_AND_MILESTONES_FAILED": 40803,
        "MILESTONE_NOT_FOUND": 40804,
        "MILESTONE_CREATE_ERROR": 40805,
        "MILESTONE_UPDATE_ERROR": 40806,
        "MILESTONE_DELETE_ERROR": 40807,
        "MILESTONE_VERSION_ERROR": 40808,
        "QUEST_NOT_FOUND": 40809,
        "QUEST_CREATE_ERROR": 40810,
        "QUEST_UPDATE_ERROR": 40811,
        "QUEST_DELETE_ERROR": 40812,
        "QUEST_VERSION_ERROR": 40813,
        "QUEST_ADD_MILESTONE_ERROR": 40814,
        "QUEST_DELETE_MILESTONE_ERROR": 40815,
        "QUEST_REORDER_MILESTONES_ERROR": 40816,
        "PROMOTION_NOT_FOUND": 40820,
        "VERSION_MISMATCH": 40821,
        "UNSUPPORTED_CRITERIA_FOR_SHARDED_COLLECTIONS": 40822,
        "STEAM_ERROR": 40830,
        "INVALID_LEADERBOARD_TOURNAMENT_SETTING": 40840,
        "LEADERBOARD_EDIT_TOURNAMENT_SETTINGS_ERROR": 40841,
        "LEADERBOARD_SCORES_EXIST": 40842,
        "TOURNAMENT_SCORES_EXIST": 40843,
        "LEADERBOARD_DBVERSION_MISMATCH": 40844,
        "LEADERBOARD_API_DOES_NOT_APPLY": 40845,
        "MISSING_CONFIG": 40900,
        "INVALID_SAML_RESP": 40901,
        "MISSING_PAGE_NAME": 40902,
        "INVALID_PAGE_NAME": 40903,
        "MALFORMED_RELAY_STATE": 40904,
        "INVALID_RESPONSE_ID": 40905,
        "LOGOUT_ERROR": 40906,
        "SCRIPT_EXISTS": 40907,
        "SCRIPT_DUPLICATE_EXISTS": 40908,
        "INVALID_UPLOAD_EXTENSION": 40909,
        "NO_TWITTER_CONSUMER_KEY": 500001,
        "NO_TWITTER_CONSUMER_SECRET": 500002,
        "INVALID_CONFIGURATION": 500003,
        "ERROR_GETTING_REQUEST_TOKEN": 500004,
        "ERROR_GETTING_ACCESS_TOKEN": 500005,
        "TWITTER_AUTH_ERROR": 500006,
        "TWITTER_ERROR": 500007,
        "FACEBOOK_ERROR": 500010,
        "FACEBOOK_SECRET_MISMATCH": 500011,
        "FACEBOOK_AUTHENTICATION_ERROR": 500012,
        "FACEBOOK_APPLICATION_TOKEN_REQUEST_ERROR": 500013,
        "FACEBOOK_BAD_APPLICATION_TOKEN_SIGNATURE": 500014,
        "UNSUPPORTED_SOCIAL_PLATFORM_CODE": 500020,
        "NOT_TEAM_ADMIN": 550000,
        "NO_TEAM_ACCESS": 550001,
        "MISSING_COMPANY_RECORD": 550002,
        "TEAM_MEMBER_NOT_FOUND": 550003,
        "TEAM_MEMBER_NOT_ENABLED": 550004,
        "TEAM_MEMBER_NOT_ACTIVE": 550005,
        "TEAM_MEMBER_LOCKED": 550006,
        "INVALID_PASSWORD": 550007,
        "TOKEN_INVALID": 550008,
        "TOKEN_EXPIRED": 550009,
        "APP_NOT_FOUND": 550010,
        "TEMPLATE_GAME_NOT_FOUND": 550011,
        "INVALID_TEMPLATE_GAME_TEAM": 550012,
        "BASIC_AUTH_FAILURE": 550013,
        "EMAIL_MISMATCH": 550014,
        "EMAIL_ID_NOT_FOUND": 550015,
        "MONGO_DB_EXCEPTION": 600001,
        "CONCURRENT_LOCK_ERROR": 600002,
        "USER_EXPORT_ERROR": 600003,
        "POST_SCORE_ON_BEHALF_OF_ERROR": 600004,
        "INVALID_USER_STATUS": 600005,
        "SLACK_WEBHOOK_SEND_ERROR": 600006,
        "SLACK_NOT_ENABLED_FOR_APP": 600007,
        "ERROR_AQUIRING_LOBBY_LOCK": 600008,
        "ERROR_SETTING_NEW_LOBBY_OWNER": 600009,
        "ERROR_SWITCHING_TEAMS": 600010,
        "DEPLOY_FAILED": 600011,
        "BUILDER_API_KEY_NOT_FOUND": 60100,
        "BUILDER_API_INVALID_KEY_SCOPE": 60101,
        "BUILDER_API_UPDATED_AT_MISMATCH": 60102,
        "BUILDER_API_TEAM_NAME_MISMATCH": 60103,
        "BUILDER_API_TEAM_HAS_APPS": 60104,
        "BUILDER_API_UNEXPECTED_EXCEPTION": 60105,
        "BUILDER_API_PARTIAL_TEAM_DELETION": 60106,
        "BUILDER_API_APP_DELETED": 60107,
        "BUILDER_API_APP_DISABLED": 60108,
        "BUILDER_API_APP_IS_LIVE": 60109,
        "BUILDER_API_APP_SUSPENDED": 60110,
        "BUILDER_API_CREATED_AT_MISMATCH": 60111,
        "PLAYSTATION_NETWORK_ERROR": 60200,
        "RTT_LEFT_BY_CHOICE": 80000,
        "RTT_EVICTED": 80001,
        "RTT_LOST_CONNECTION": 80002,
        "RTT_TIMEOUT": 80100,
        "RTT_ROOM_READY": 80101,
        "RTT_ROOM_CANCELLED": 80102,
        "RTT_ERROR_ASSIGNING_ROOM": 80103,
        "RTT_ERROR_LAUNCHING_ROOM": 80104,
        "RTT_BY_REQUEST": 80105,
        "RTT_NO_LOBBIES_FOUND": 80200,
        "RTT_FIND_REQUEST_CANCELLED": 80201,
        "CLIENT_NETWORK_ERROR_TIMEOUT": 90001,
        "CLIENT_UPLOAD_FILE_CANCELLED": 90100,
        "CLIENT_UPLOAD_FILE_TIMED_OUT": 90101,
        "CLIENT_UPLOAD_FILE_UNKNOWN": 90102,
        "CLIENT_DISABLED": 90200
    };
};