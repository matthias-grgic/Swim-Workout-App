import styled from "styled-components"

function FilterButtons({ transferedSetData, transferedListForSearch }) {
    return (
        <FilterButtonsStyled>
            <Button
                ontouchstart
                onClick={() => {
                    transferedSetData(transferedListForSearch)
                }}
            >
                ALL
            </Button>
            <Button
                ontouchstart
                data-cy="submitPB"
                onClick={() => {
                    const filteredType = transferedListForSearch.filter((item) => item.equipment === "pullbuoy")
                    return transferedSetData(filteredType)
                }}
            >
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 476.801 476.801" xmlSpace="preserve">
                    <path
                        d="M445.834,68.371c-19.681-17.069-45.76-24.742-71.549-21.062c-0.332,0.048-0.66,0.116-0.984,0.205
	c-0.879,0.241-88.385,24.106-129.947,24.106c-41.65,0-139.075-23.918-140.055-24.159c-0.259-0.064-0.521-0.115-0.785-0.153
	c-25.787-3.678-51.866,3.993-71.547,21.062C11.287,85.44,0,110.169,0,136.22v204.347c0,26.051,11.287,50.78,30.967,67.849
	c0.927,0.804,1.873,1.581,2.828,2.343c0.172,0.138,0.344,0.277,0.517,0.413c0.924,0.726,1.86,1.433,2.808,2.12
	c0.18,0.131,0.362,0.259,0.543,0.388c0.986,0.704,1.981,1.393,2.992,2.054c0.012,0.008,0.024,0.015,0.037,0.023
	c1.005,0.657,2.025,1.286,3.052,1.9c0.184,0.11,0.367,0.221,0.551,0.33c0.831,0.489,1.667,0.968,2.511,1.429
	c0.005,0.003,0.011,0.006,0.016,0.009c0.169,0.092,0.34,0.178,0.509,0.269c0.197,0.106,0.394,0.208,0.592,0.313
	c0.34,0.179,0.678,0.364,1.02,0.539c0.079,0.041,0.16,0.078,0.24,0.119c0.645,0.327,1.292,0.648,1.943,0.959
	c0.029,0.014,0.058,0.027,0.087,0.04c1.063,0.506,2.137,0.985,3.218,1.448c0.194,0.083,0.387,0.168,0.581,0.25
	c0.148,0.063,0.295,0.129,0.443,0.19c0.125,0.052,0.251,0.099,0.376,0.15c0.796,0.326,1.597,0.638,2.402,0.94
	c0.209,0.078,0.418,0.154,0.628,0.231c1.117,0.41,2.239,0.805,3.371,1.17c0.044,0.014,0.088,0.026,0.131,0.041
	c0.694,0.223,1.39,0.439,2.089,0.645c0.219,0.064,0.44,0.122,0.659,0.184c0.2,0.057,0.4,0.112,0.6,0.168
	c0.198,0.055,0.394,0.112,0.592,0.166c0.149,0.04,0.296,0.085,0.445,0.125c0.969,0.257,1.943,0.493,2.92,0.717
	c0.218,0.05,0.436,0.098,0.654,0.146c1.161,0.258,2.327,0.5,3.499,0.712c0.051,0.009,0.102,0.017,0.153,0.026
	c1.149,0.206,2.304,0.385,3.462,0.546c0.193,0.027,0.385,0.056,0.578,0.081c1.156,0.153,2.315,0.282,3.478,0.39
	c0.218,0.02,0.436,0.038,0.654,0.057c0.163,0.014,0.325,0.029,0.489,0.042c0.69,0.194,1.415,0.305,2.167,0.305
	c0.405,0,0.8-0.04,1.189-0.098c1.147,0.049,2.297,0.072,3.448,0.076c0.119,0,0.237,0.008,0.356,0.008
	c0.08,0,0.159-0.004,0.239-0.004c0.966-0.003,1.933-0.018,2.901-0.052c0.072-0.002,0.145-0.008,0.217-0.01
	c0.888-0.033,1.777-0.082,2.667-0.142c0.276-0.019,0.552-0.041,0.827-0.062c0.722-0.055,1.444-0.12,2.166-0.192
	c0.272-0.027,0.543-0.053,0.815-0.083c0.963-0.106,1.926-0.222,2.888-0.36c0.264-0.038,0.525-0.089,0.785-0.153
	c0.979-0.241,98.385-24.158,140.049-24.158c0.649,0,1.309,0.006,1.98,0.017c39.593,0.677,116.506,21.006,126.825,23.779
	c0.699,0.188,1.093,0.295,1.148,0.31c0.323,0.089,0.652,0.157,0.983,0.205c4.244,0.605,8.491,0.904,12.721,0.904
	c1.269,0,2.535-0.031,3.799-0.085c0.391,0.059,0.787,0.099,1.194,0.099c0.771,0,1.513-0.115,2.218-0.318
	c16.241-1.31,31.903-7.011,45.247-16.622c2.187-1.575,4.312-3.255,6.367-5.038c19.681-17.069,30.968-41.799,30.968-67.85V136.22
	C476.801,110.169,465.514,85.44,445.834,68.371z M41.45,80.458c16.076-13.943,37.347-20.262,58.417-17.363
	c7.878,1.933,100.854,24.526,143.486,24.526c42.468,0,125.665-22.358,133.677-24.539c21.041-2.86,42.269,3.454,58.32,17.376
	c16.174,14.027,25.45,34.353,25.45,55.762c0,20.026-7.873,38.755-22.168,52.738c-3.159,3.089-3.215,8.154-0.125,11.313
	c3.088,3.158,8.154,3.214,11.313,0.125c3.973-3.886,7.517-8.086,10.654-12.525c-1.719,18.908-10.647,36.513-25.124,49.069
	c-10.161,8.813-22.401,14.568-35.351,16.887v-12.092c0-4.418-3.582-8-8-8s-8,3.582-8,8v13.178c-2.321-0.094-4.646-0.28-6.969-0.597
	c-8.013-2.181-91.214-24.539-133.682-24.539c-42.629,0-135.594,22.59-143.48,24.525c-2.356,0.324-4.715,0.514-7.068,0.61v-13.177
	c0-4.418-3.582-8-8-8s-8,3.582-8,8v12.091c-12.95-2.318-25.189-8.073-35.351-16.886c-14.481-12.559-23.409-30.171-25.125-49.084
	c4.163,5.923,9.064,11.376,14.641,16.213c19.681,17.07,45.764,24.742,71.549,21.062c0.264-0.038,0.525-0.089,0.785-0.153
	c0.979-0.241,98.385-24.158,140.049-24.158c41.543,0,129.073,23.866,129.953,24.107c0.323,0.089,0.652,0.157,0.984,0.205
	c4.294,0.613,8.59,0.919,12.869,0.919c6.523,0,13.007-0.712,19.385-2.133c4.313-0.961,7.029-5.236,6.068-9.549
	c-0.962-4.313-5.239-7.028-9.549-6.068c-8.514,1.898-17.268,2.253-26.029,1.059c-8.003-2.178-91.211-24.54-133.682-24.54
	c-42.629,0-135.594,22.59-143.48,24.525c-21.071,2.894-42.342-3.419-58.419-17.362C25.276,177.954,16,157.629,16,136.22
	S25.276,94.485,41.45,80.458z M92.801,270.942c3.234-0.108,6.477-0.391,9.715-0.854c0.264-0.038,0.525-0.089,0.785-0.153
	c0.979-0.241,98.385-24.158,140.049-24.158c41.544,0,129.073,23.866,129.953,24.106c0.323,0.089,0.652,0.157,0.983,0.205
	c3.239,0.462,6.48,0.743,9.714,0.851v93.534c-2.321-0.094-4.646-0.28-6.969-0.597c-8.012-2.181-91.214-24.54-133.682-24.54
	c-42.629,0-135.594,22.59-143.48,24.525c-2.356,0.324-4.715,0.514-7.068,0.61V270.942z M30.967,249.026
	c13.1,11.362,29.037,18.556,45.834,21.014v93.344c-12.95-2.318-25.189-8.073-35.351-16.886C25.276,332.472,16,312.147,16,290.737
	v-58.399C20.233,238.444,25.242,244.061,30.967,249.026z M16.037,341.953c4.225,6.084,9.222,11.683,14.929,16.633
	c13.1,11.362,29.037,18.556,45.834,21.014v33.615c-12.95-2.318-25.189-8.074-35.351-16.887
	C25.627,382.605,16.43,362.85,16.037,341.953z M282.538,392.928c-0.829-0.13-1.655-0.257-2.479-0.381
	c-1.318-0.199-2.63-0.393-3.933-0.578c-0.09-0.013-0.181-0.026-0.271-0.039c-2.371-0.335-4.711-0.645-7.015-0.928
	c-0.793-0.098-1.581-0.191-2.365-0.282c-1.838-0.212-3.651-0.408-5.43-0.581c-0.028-0.003-0.057-0.006-0.086-0.009
	c0,0-0.001,0-0.001,0c-0.15-0.015-0.296-0.027-0.444-0.041c-1.524-0.145-3.024-0.275-4.496-0.388
	c-0.68-0.052-1.356-0.102-2.024-0.147c-0.224-0.015-0.442-0.027-0.664-0.041c-3.514-0.225-6.86-0.348-9.98-0.348
	c-2.266,0-4.683,0.067-7.213,0.188c-1.712,0.082-3.479,0.19-5.296,0.322c-1.68,0.123-3.4,0.265-5.16,0.427
	c-0.138,0.013-0.273,0.024-0.412,0.037c-1.472,0.138-2.973,0.291-4.494,0.454c-0.194,0.021-0.384,0.04-0.578,0.061
	c-0.051,0.005-0.104,0.012-0.155,0.018c-1.671,0.183-3.367,0.379-5.087,0.59c-0.205,0.025-0.414,0.052-0.62,0.078
	c-1.284,0.159-2.581,0.326-3.888,0.499c-0.826,0.109-1.656,0.222-2.49,0.336c-1.873,0.258-3.765,0.528-5.674,0.81
	c-0.936,0.138-1.875,0.28-2.817,0.423c-8.709,1.328-17.688,2.88-26.531,4.525c-0.259,0.048-0.517,0.096-0.776,0.145
	c-20.377,3.807-39.943,8.083-53.657,11.218c-0.56,0.128-1.11,0.254-1.65,0.378c-0.668,0.154-1.32,0.304-1.956,0.451
	c-7.933,1.834-13.37,3.157-15.028,3.564c-0.332,0.046-0.664,0.069-0.996,0.11c-2.025,0.25-4.05,0.419-6.072,0.501v-33.8
	c3.234-0.108,6.477-0.391,9.715-0.854c0.264-0.038,0.525-0.089,0.785-0.153c0.979-0.241,98.385-24.158,140.049-24.158
	c41.543,0,129.073,23.866,129.953,24.107c0.323,0.089,0.652,0.157,0.984,0.205c3.238,0.462,6.479,0.743,9.713,0.851v33.8
	c-2.321-0.094-4.646-0.28-6.969-0.596C371.095,412.088,323.878,399.396,282.538,392.928z M435.351,396.328
	c-10.161,8.813-22.401,14.567-35.351,16.885V379.59c16.797-2.459,32.734-9.642,45.834-21.004
	c5.708-4.95,10.704-10.549,14.929-16.633C460.371,362.851,451.174,382.605,435.351,396.328z M460.801,290.737
	c0,21.409-9.276,41.733-25.45,55.762c-10.162,8.813-22.401,14.569-35.351,16.888v-93.358c16.796-2.459,32.735-9.642,45.833-21.002
	c5.725-4.966,10.734-10.583,14.968-16.689V290.737z"
                    />
                </svg>
            </Button>
            <Button
                ontouchstart
                onClick={() => {
                    const filteredType = transferedListForSearch.filter((item) => item.equipment === "paddles")
                    return transferedSetData(filteredType)
                }}
            >
                <svg id="handpaddles" width="100%" version="1.1" viewBox="0 0 100 100" xmlSpace="preserve">
                    <path d="M19.74842,94.8487c-0.28596,0-0.57487-0.02359-0.86279-0.07076c-1.40916-0.1533-2.68861-0.90603-3.60839-2.15993   C8.1312,83.1509,2.56531,70.80061,0.76505,60.40781C-3.09688,38.60316,8.04276,18.3148,25.5983,15.18792   c0.00196,0,0.00295,0,0.00491-0.00098C43.1165,12.12,60.51481,27.38885,64.3787,49.20626   c1.81796,10.48616,0.79204,23.99404-2.67288,35.2575c-0.38521,1.39343-1.27159,2.50976-2.61982,3.27035   c-1.5487,0.73308-2.96179,0.82938-4.31985,0.3518c-5.00281-1.5546-10.72101-1.85529-16.47754-0.84117   c-5.75948,1.0043-11.04628,3.23891-15.29047,6.46406C22.05182,94.45366,20.91781,94.8487,19.74842,94.8487z M26.19675,18.5585   C10.49946,21.35619,0.60291,39.86394,4.13662,59.81623c1.71379,9.89557,7.03499,21.67984,13.88622,30.75782   c0.36261,0.49527,0.794,0.7547,1.33251,0.81562c0.60828,0.09238,1.10256-0.03734,1.5487-0.38718   c4.70113-3.57301,10.5009-6.03168,16.79495-7.13031c6.28619-1.10649,12.56157-0.77042,18.14613,0.96696   c0.36752,0.12579,0.87458,0.22995,1.67252-0.14347c0.43631-0.25156,0.75077-0.63874,0.90406-1.19297   c3.32931-10.82715,4.31592-23.72381,2.58641-33.70585C57.47244,29.84161,41.85769,15.82174,26.19675,18.5585z" />
                    <path d="M33.20324,69.09468c-5.02541,0-9.50151-3.6143-10.4154-8.73601c-0.49723-2.81242,0.13659-5.64057,1.78258-7.96952   c1.6283-2.30241,4.04175-3.8236,6.80013-4.28546c2.78982-0.49036,5.5993,0.12578,7.9027,1.73934   c2.30634,1.61454,3.84817,4.04372,4.34049,6.83846c0.49527,2.77115-0.12284,5.57571-1.74032,7.8909   c-1.61847,2.31911-4.04568,3.86782-6.83453,4.36112C34.42275,69.04161,33.80857,69.09468,33.20324,69.09468z M33.23567,51.36226   c-0.42353,0-0.851,0.03734-1.27748,0.11301c-0.0059,0.00098-0.01081,0.00197-0.01671,0.00295   c-1.85333,0.30856-3.4777,1.3335-4.57633,2.88613c-1.11436,1.57818-1.54379,3.4944-1.20771,5.39687   c0.69377,3.88158,4.41812,6.4896,8.28692,5.79976c1.88576-0.33215,3.52781-1.37968,4.62252-2.94803   c1.09372-1.56639,1.51136-3.45903,1.17725-5.33398c-0.33509-1.89853-1.37673-3.54157-2.9333-4.63234   C36.10509,51.80249,34.692,51.36226,33.23567,51.36226z" />
                    <path d="M17.45485,80.9949c-0.7036,0-1.36297-0.43827-1.61257-1.13794c-5.71231-16.06285-2.94902-23.78867-0.72915-29.99722   c1.2932-3.61331,2.31421-6.46799,1.62633-10.38494c-0.16411-0.9306,0.45793-1.81796,1.38951-1.98108   c0.93256-0.16509,1.81795,0.45891,1.98108,1.38951c0.8451,4.80824-0.42746,8.36456-1.77373,12.12919   c-2.14322,5.99335-4.5724,12.78562,0.73111,27.69678c0.31642,0.8903-0.14838,1.86906-1.03869,2.18548   C17.83908,80.96346,17.64549,80.9949,17.45485,80.9949z" />
                    <path d="M55.10615,74.37756c-0.93944,0-1.70593-0.75863-1.71183-1.70004c-0.1022-15.80146-4.70604-21.36342-8.76647-26.27091   c-2.55398-3.08561-4.96645-6.00023-5.81057-10.81142c-0.16411-0.9306,0.45793-1.81796,1.38951-1.98108   c0.93354-0.16116,1.81796,0.45793,1.98108,1.38951c0.68885,3.91892,2.62473,6.25867,5.07651,9.22047   c4.20684,5.08339,9.44157,11.40987,9.5536,28.42986c0.00589,0.94534-0.7547,1.71772-1.70004,1.72362   C55.11401,74.37756,55.11008,74.37756,55.10615,74.37756z" />
                    <path d="M24.75811,37.41118c-0.51394,0-1.02199-0.23093-1.35905-0.67019c-0.57487-0.74978-0.43336-1.82385,0.31642-2.3997   c2.90873-2.23068,6.71955-2.88907,10.18742-1.75212c0.89915,0.29382,1.38852,1.25979,1.0947,2.15796   c-0.29185,0.89915-1.25979,1.39147-2.15796,1.0947c-2.39478-0.7832-5.02836-0.3292-7.04089,1.21557   C25.48824,37.29522,25.1217,37.41118,24.75811,37.41118z" />
                    <path d="M80.22929,85.21452c-1.10846,0-2.23657-0.37931-3.25659-1.12614c-3.10133-2.38201-6.89447-4.27662-11.00206-5.50497   c-0.90603-0.26925-1.42096-1.22441-1.14973-2.12848c0.27122-0.90603,1.21655-1.42291,2.12848-1.14973   c4.50263,1.34431,8.67901,3.43545,12.07514,6.04347c0.48938,0.3577,0.99644,0.50117,1.52905,0.41076   c0.63284-0.07272,1.06522-0.33215,1.41505-0.80776c6.86302-9.09763,12.18324-20.8819,13.89507-30.76961   c3.53568-19.96114-6.36185-38.46889-22.06112-41.26461C65.07444,7.40511,56.09473,10.95258,49.1924,18.644   c-0.63088,0.7036-1.71281,0.76452-2.4164,0.1307c-0.7036-0.63088-0.76256-1.71379-0.1307-2.41641   c7.70813-8.58762,17.82381-12.53012,27.74886-10.8124c17.56438,3.12786,28.70403,23.41623,24.84013,45.22676   c-1.7983,10.38592-7.36222,22.73426-14.52201,32.22299c-0.908,1.23621-2.18941,1.98698-3.68897,2.15207   C80.76191,85.19291,80.49658,85.21452,80.22929,85.21452z" />
                    <path d="M68.05392,59.37403c-0.83134,0-1.56049-0.60533-1.69021-1.4524c-0.14347-0.93354,0.49724-1.80813,1.43275-1.9516   c3.07578-0.47168,5.50693-2.82618,6.04936-5.85479c0.68787-3.90418-1.9398-7.64622-5.85676-8.33802   c-0.97678-0.14347-1.92015-0.11694-2.69057,0.08353c-0.92175,0.23584-1.85136-0.30463-2.09114-1.21951   c-0.24174-0.91389,0.30463-1.8494,1.21852-2.09016c1.23425-0.32526,2.61786-0.3744,4.11349-0.15133   c5.82138,1.0269,9.69313,6.54758,8.67705,12.31394c-0.80187,4.47413-4.37685,7.94495-8.9011,8.64069   C68.22687,59.36813,68.14039,59.37403,68.05392,59.37403z" />
                    <path d="M82.54645,71.35484c-0.18867,0-0.38128-0.03145-0.56995-0.09827c-0.89227-0.31446-1.35806-1.29321-1.0436-2.18351   c5.26715-14.90919,2.85173-21.70244,0.71932-27.69678c-1.34038-3.7666-2.6041-7.32488-1.76096-12.13411   c0.16509-0.9306,1.0554-1.5487,1.98305-1.38951c0.92961,0.16312,1.55263,1.05048,1.3895,1.98108   c-0.68983,3.92089,0.32625,6.77851,1.61356,10.39575c2.2071,6.2066,4.95467,13.93044-0.71735,29.98347   C83.91237,70.91656,83.25201,71.35484,82.54645,71.35484z" />
                    <path d="M58.75778,29.99491c-0.19064,0-0.38521-0.03243-0.57585-0.10023c-0.89031-0.31741-1.35413-1.29615-1.03574-2.18646   c0.26139-0.73406,0.46186-1.50153,0.60926-2.34663c0.16509-0.9306,1.04753-1.55165,1.98304-1.38853   c0.93158,0.16411,1.55263,1.05147,1.38951,1.98206c-0.18278,1.03673-0.43041,1.98599-0.75863,2.90283   C60.11977,29.5586,59.46138,29.99491,58.75778,29.99491z" />
                    <path d="M75.24319,27.77012c-0.36359,0-0.72915-0.11596-1.03967-0.35376c-2.01449-1.54575-4.67951-2.01842-7.12638-1.26274   c-0.89817,0.27711-1.86119-0.22896-2.13831-1.13303c-0.27908-0.90308,0.22798-1.86119,1.13204-2.13929   c3.50423-1.078,7.32685-0.39995,10.21592,1.81894c0.75077,0.57585,0.89227,1.6509,0.31642,2.3997   C76.26517,27.5392,75.75811,27.77012,75.24319,27.77012z" />
                    <path d="M19.74842,94.8487c-0.28596,0-0.57487-0.02359-0.86279-0.07076c-1.40916-0.1533-2.68861-0.90603-3.60839-2.15993   C8.1312,83.1509,2.56531,70.80061,0.76505,60.40781C-3.09688,38.60316,8.04276,18.3148,25.5983,15.18792   c0.00196,0,0.00295,0,0.00491-0.00098C43.1165,12.12,60.51481,27.38885,64.3787,49.20626   c1.81796,10.48616,0.79204,23.99404-2.67288,35.2575c-0.38521,1.39343-1.27159,2.50976-2.61982,3.27035   c-1.5487,0.73308-2.96179,0.82938-4.31985,0.3518c-5.00281-1.5546-10.72101-1.85529-16.47754-0.84117   c-5.75948,1.0043-11.04628,3.23891-15.29047,6.46406C22.05182,94.45366,20.91781,94.8487,19.74842,94.8487z M26.19675,18.5585   C10.49946,21.35619,0.60291,39.86394,4.13662,59.81623c1.71379,9.89557,7.03499,21.67984,13.88622,30.75782   c0.36261,0.49527,0.794,0.7547,1.33251,0.81562c0.60828,0.09238,1.10256-0.03734,1.5487-0.38718   c4.70113-3.57301,10.5009-6.03168,16.79495-7.13031c6.28619-1.10649,12.56157-0.77042,18.14613,0.96696   c0.36752,0.12579,0.87458,0.22995,1.67252-0.14347c0.43631-0.25156,0.75077-0.63874,0.90406-1.19297   c3.32931-10.82715,4.31592-23.72381,2.58641-33.70585C57.47244,29.84161,41.85769,15.82174,26.19675,18.5585z" />
                </svg>
            </Button>
            <Button
                ontouchstart
                onClick={() => {
                    const filteredType = transferedListForSearch.filter((item) => item.equipment === "fins")
                    return transferedSetData(filteredType)
                }}
            >
                <svg version="1.1" width="100%" viewBox="0 0 478.646 478.646" xmlSpace="preserve">
                    <path
                        d="M113.979,296.218c-32.164,0-58.331,26.263-58.331,58.545c0,32.164,26.167,58.331,58.331,58.331s58.331-26.167,58.331-58.331
	C172.309,322.481,146.142,296.218,113.979,296.218z M113.979,398.094c-23.893,0-43.331-19.438-43.331-43.331
	c0-24.011,19.438-43.545,43.331-43.545s43.331,19.534,43.331,43.545C157.309,378.656,137.871,398.094,113.979,398.094z
	 M227.978,37.356c-0.002-0.139-0.011-0.276-0.021-0.413c-0.008-0.115-0.016-0.229-0.029-0.342c-0.016-0.136-0.038-0.271-0.062-0.405
	c-0.02-0.112-0.039-0.224-0.063-0.335c-0.028-0.128-0.063-0.253-0.097-0.379c-0.031-0.114-0.063-0.227-0.099-0.338
	c-0.039-0.117-0.083-0.231-0.127-0.346c-0.044-0.115-0.088-0.229-0.137-0.34c-0.048-0.108-0.1-0.212-0.153-0.317
	c-0.056-0.112-0.112-0.224-0.173-0.333c-0.057-0.101-0.118-0.198-0.179-0.295c-0.067-0.106-0.133-0.212-0.204-0.315
	c-0.067-0.096-0.138-0.188-0.21-0.28c-0.075-0.097-0.149-0.194-0.228-0.287c-0.078-0.092-0.161-0.179-0.243-0.267
	c-0.081-0.086-0.161-0.172-0.245-0.254c-0.089-0.087-0.183-0.169-0.276-0.251c-0.086-0.076-0.172-0.152-0.261-0.223
	c-0.099-0.079-0.202-0.154-0.305-0.228c-0.092-0.066-0.183-0.133-0.278-0.195c-0.107-0.07-0.216-0.134-0.327-0.199
	c-0.099-0.058-0.198-0.116-0.3-0.17c-0.11-0.058-0.224-0.11-0.337-0.162c-0.109-0.05-0.218-0.101-0.329-0.146
	c-0.112-0.045-0.226-0.085-0.34-0.125c-0.12-0.042-0.24-0.083-0.362-0.119c-0.112-0.032-0.226-0.06-0.34-0.087
	c-0.129-0.031-0.259-0.062-0.391-0.086c-0.115-0.021-0.231-0.037-0.347-0.053c-0.133-0.018-0.267-0.036-0.402-0.047
	c-0.045-0.004-0.088-0.013-0.132-0.016c-0.084-0.006-0.167-0.001-0.25-0.004c-0.081-0.002-0.161-0.012-0.243-0.012
	c-14.726,0-22.497,3.036-29.354,5.714c-6.437,2.515-11.996,4.686-23.896,4.686s-17.458-2.171-23.896-4.686
	c-6.857-2.678-14.628-5.714-29.354-5.714c-14.724,0-22.494,3.036-29.35,5.714c-6.436,2.515-11.995,4.686-23.892,4.686
	c-11.898,0-17.457-2.171-23.893-4.686c-6.856-2.678-14.627-5.714-29.351-5.714c-0.083,0-0.164,0.01-0.247,0.012
	s-0.164-0.002-0.247,0.004c-0.045,0.003-0.088,0.012-0.132,0.016c-0.136,0.011-0.269,0.029-0.402,0.047
	c-0.116,0.016-0.233,0.032-0.347,0.053c-0.132,0.024-0.261,0.055-0.391,0.086c-0.114,0.028-0.228,0.055-0.34,0.087
	c-0.123,0.036-0.242,0.077-0.362,0.119c-0.114,0.04-0.228,0.079-0.34,0.125c-0.112,0.045-0.221,0.095-0.329,0.146
	c-0.114,0.052-0.227,0.105-0.337,0.162c-0.102,0.054-0.201,0.112-0.3,0.17c-0.11,0.064-0.22,0.129-0.327,0.199
	c-0.095,0.062-0.186,0.128-0.278,0.195c-0.103,0.074-0.206,0.149-0.305,0.228c-0.089,0.072-0.175,0.148-0.261,0.223
	c-0.094,0.082-0.187,0.164-0.276,0.251c-0.085,0.082-0.165,0.168-0.245,0.254c-0.082,0.088-0.165,0.176-0.243,0.267
	c-0.079,0.093-0.153,0.19-0.228,0.287c-0.071,0.093-0.143,0.185-0.21,0.28c-0.072,0.103-0.138,0.208-0.204,0.315
	c-0.061,0.098-0.123,0.195-0.179,0.295c-0.062,0.109-0.117,0.221-0.173,0.333c-0.052,0.105-0.105,0.209-0.153,0.317
	c-0.049,0.112-0.093,0.226-0.137,0.34c-0.044,0.115-0.088,0.229-0.127,0.346c-0.037,0.111-0.068,0.225-0.099,0.338
	c-0.035,0.125-0.069,0.251-0.097,0.379c-0.024,0.111-0.043,0.223-0.063,0.335c-0.023,0.134-0.046,0.268-0.062,0.405
	c-0.013,0.113-0.021,0.227-0.029,0.342c-0.01,0.137-0.019,0.274-0.021,0.413C0.006,37.4,0,37.442,0,37.486
	c0,0.082,0.01,0.162,0.012,0.243c0.003,0.084-0.002,0.166,0.004,0.25l20.917,317.165c0.007,0.182,0.016,0.363,0.036,0.541
	l0.414,6.272c3.207,48.618,43.886,86.703,92.61,86.703s89.402-38.084,92.609-86.703L227.969,37.98
	c0.006-0.084,0.001-0.167,0.004-0.25c0.003-0.082,0.012-0.161,0.012-0.243C227.985,37.442,227.979,37.4,227.978,37.356z
	 M191.634,360.97c-2.688,40.761-36.792,72.69-77.642,72.69s-74.953-31.929-77.642-72.69l-0.427-6.477
	c0.058-13.207,3.46-26.254,9.856-37.754c13.833-24.874,39.965-40.325,68.199-40.325c17.83,0,34.626,5.91,48.574,17.09
	c3.232,2.592,7.953,2.071,10.542-1.161c2.591-3.232,2.071-7.952-1.161-10.543c-16.399-13.146-36.982-20.387-57.956-20.387
	c-33.507,0-64.514,18.227-81.055,47.597L15.538,45.388c6.771,0.74,11.073,2.416,15.855,4.284c6.856,2.679,14.627,5.714,29.351,5.714
	c2.075,0,3.998-0.066,5.814-0.177v128.704c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V52.69c3.196-0.934,5.934-2.002,8.536-3.019
	c6.436-2.514,11.995-4.686,23.892-4.686c11.9,0,17.459,2.171,23.896,4.686c2.605,1.018,5.345,2.086,8.545,3.02v131.221
	c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V55.21c1.814,0.111,3.735,0.177,5.808,0.177c14.725,0,22.497-3.036,29.354-5.714
	c4.782-1.868,9.085-3.545,15.858-4.285L191.634,360.97z M364.64,296.218c-32.164,0-58.331,26.263-58.331,58.545
	c0,32.164,26.167,58.331,58.331,58.331s58.331-26.167,58.331-58.331C422.971,322.481,396.804,296.218,364.64,296.218z
	 M364.64,398.094c-23.893,0-43.331-19.438-43.331-43.331c0-24.011,19.438-43.545,43.331-43.545s43.331,19.534,43.331,43.545
	C407.971,378.656,388.533,398.094,364.64,398.094z M478.646,37.486c0-0.044-0.006-0.086-0.007-0.13
	c-0.002-0.139-0.011-0.276-0.021-0.413c-0.008-0.115-0.016-0.229-0.029-0.342c-0.016-0.136-0.038-0.271-0.062-0.405
	c-0.02-0.112-0.039-0.224-0.063-0.335c-0.028-0.128-0.063-0.253-0.097-0.379c-0.031-0.114-0.063-0.227-0.099-0.338
	c-0.039-0.117-0.083-0.231-0.127-0.346c-0.044-0.115-0.088-0.229-0.137-0.34c-0.048-0.108-0.1-0.212-0.153-0.317
	c-0.056-0.112-0.112-0.224-0.173-0.333c-0.057-0.101-0.118-0.198-0.179-0.295c-0.067-0.106-0.133-0.212-0.204-0.315
	c-0.067-0.096-0.138-0.188-0.21-0.28c-0.075-0.097-0.149-0.194-0.228-0.287c-0.078-0.092-0.161-0.179-0.243-0.267
	c-0.081-0.086-0.161-0.172-0.245-0.254c-0.089-0.087-0.183-0.169-0.276-0.251c-0.086-0.076-0.172-0.152-0.261-0.223
	c-0.099-0.079-0.202-0.154-0.305-0.228c-0.092-0.066-0.183-0.133-0.278-0.195c-0.107-0.07-0.216-0.134-0.327-0.199
	c-0.099-0.058-0.198-0.116-0.3-0.17c-0.11-0.058-0.224-0.11-0.337-0.162c-0.109-0.05-0.218-0.101-0.329-0.146
	c-0.112-0.045-0.226-0.085-0.34-0.125c-0.12-0.042-0.24-0.083-0.362-0.119c-0.112-0.032-0.226-0.06-0.34-0.087
	c-0.129-0.031-0.259-0.062-0.391-0.086c-0.115-0.021-0.231-0.037-0.347-0.053c-0.133-0.018-0.267-0.036-0.402-0.047
	c-0.045-0.004-0.088-0.013-0.132-0.016c-0.084-0.006-0.167-0.001-0.25-0.004c-0.081-0.002-0.161-0.012-0.243-0.012
	c-14.725,0-22.497,3.036-29.354,5.714c-6.437,2.515-11.996,4.686-23.896,4.686c-11.899,0-17.458-2.171-23.896-4.686
	c-6.857-2.678-14.628-5.714-29.354-5.714c-14.724,0-22.494,3.036-29.35,5.714c-6.436,2.515-11.995,4.686-23.892,4.686
	c-11.898,0-17.456-2.171-23.893-4.686c-6.856-2.678-14.627-5.714-29.351-5.714c-0.083,0-0.164,0.01-0.247,0.012
	c-0.083,0.003-0.164-0.002-0.247,0.004c-0.045,0.003-0.088,0.012-0.132,0.016c-0.136,0.011-0.269,0.029-0.402,0.047
	c-0.116,0.016-0.233,0.032-0.347,0.053c-0.132,0.024-0.261,0.055-0.391,0.086c-0.114,0.028-0.228,0.055-0.34,0.087
	c-0.123,0.036-0.242,0.077-0.362,0.119c-0.114,0.04-0.228,0.079-0.34,0.125c-0.112,0.045-0.221,0.095-0.329,0.146
	c-0.114,0.052-0.227,0.105-0.337,0.162c-0.102,0.054-0.201,0.112-0.3,0.17c-0.11,0.064-0.22,0.129-0.327,0.199
	c-0.095,0.062-0.186,0.128-0.278,0.195c-0.103,0.074-0.206,0.149-0.305,0.228c-0.089,0.072-0.175,0.148-0.261,0.223
	c-0.094,0.082-0.187,0.164-0.276,0.251c-0.085,0.082-0.165,0.168-0.245,0.254c-0.082,0.088-0.165,0.176-0.243,0.267
	c-0.079,0.093-0.153,0.19-0.228,0.287c-0.071,0.093-0.143,0.185-0.21,0.28c-0.072,0.103-0.138,0.208-0.204,0.315
	c-0.061,0.098-0.123,0.195-0.179,0.295c-0.062,0.109-0.117,0.221-0.173,0.333c-0.052,0.105-0.105,0.209-0.153,0.317
	c-0.049,0.112-0.093,0.226-0.137,0.34c-0.044,0.115-0.088,0.229-0.127,0.346c-0.037,0.111-0.068,0.225-0.099,0.338
	c-0.035,0.125-0.069,0.251-0.097,0.379c-0.024,0.111-0.043,0.223-0.063,0.335c-0.023,0.134-0.046,0.268-0.062,0.405
	c-0.013,0.113-0.021,0.227-0.029,0.342c-0.01,0.137-0.019,0.274-0.021,0.413c-0.001,0.044-0.007,0.086-0.007,0.13
	c0,0.082,0.01,0.162,0.012,0.243c0.003,0.084-0.002,0.166,0.004,0.25l20.916,317.134c0.007,0.194,0.017,0.387,0.038,0.577
	l0.413,6.266c3.207,48.618,43.885,86.703,92.609,86.703c48.724,0,89.402-38.084,92.609-86.703L478.63,37.98
	c0.006-0.084,0.001-0.167,0.004-0.25C478.637,37.648,478.646,37.568,478.646,37.486z M442.296,360.97
	c-2.688,40.761-36.793,72.69-77.642,72.69s-74.953-31.929-77.641-72.69l-0.428-6.482c0.059-13.205,3.461-26.25,9.856-37.749
	c13.833-24.874,39.965-40.325,68.199-40.325c17.83,0,34.626,5.91,48.574,17.091c3.232,2.591,7.953,2.071,10.543-1.161
	c2.591-3.232,2.071-7.952-1.161-10.543c-16.4-13.146-36.982-20.387-57.956-20.387c-33.507,0-64.514,18.227-81.054,47.597
	L266.199,45.388c6.772,0.74,11.074,2.416,15.855,4.285c6.856,2.678,14.627,5.714,29.351,5.714c2.075,0,3.998-0.066,5.814-0.177
	v128.704c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V52.69c3.196-0.934,5.934-2.002,8.536-3.019
	c6.436-2.514,11.995-4.686,23.892-4.686c11.9,0,17.459,2.171,23.896,4.686c2.605,1.018,5.345,2.086,8.545,3.02v131.221
	c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V55.21c1.814,0.111,3.735,0.177,5.808,0.177c14.726,0,22.497-3.036,29.354-5.714
	c4.782-1.868,9.085-3.545,15.858-4.285L442.296,360.97z"
                    />
                </svg>
            </Button>
            <Button
                ontouchstart
                onClick={() => {
                    const filteredType = transferedListForSearch.filter((item) => item.equipment === "snorkel")
                    return transferedSetData(filteredType)
                }}
            >
                <svg version="1.1" width="100%" viewBox="0 0 348.576 348.576" xmlSpace="preserve">
                    <path
                        d="M301.788,82.131V28.577C301.788,12.82,288.967,0,273.21,0s-28.577,12.82-28.577,28.577v47.5H69.288
			c-24.813,0-45,20.187-45,45v34.203c0,41.794,34.002,75.797,75.797,75.797c11.623,0,27.916-4.527,36.568-13.18l24.706-24.706
			c4.858-4.858,9.208-7.322,12.929-7.322s8.07,2.464,12.929,7.322l24.706,24.706c7.734,7.733,21.561,12.16,32.712,13.016v41.299
			c0,10.293-8.09,18.907-18.034,19.202c-5.063,0.152-9.87-1.715-13.514-5.253c-2.797-2.715-4.62-6.136-5.323-9.865
			c4.941-6.232,7.903-14.102,7.903-22.655c0-20.147-16.391-36.539-36.539-36.539c-20.147,0-36.538,16.391-36.538,36.539
			c0,8.474,2.908,16.277,7.767,22.482c0.818,19.181,8.743,37.063,22.542,50.653c14.302,14.086,33.124,21.801,53.12,21.8
			c0.394,0,0.792-0.003,1.187-0.009c41.125-0.627,74.583-35.055,74.583-76.746v-62.709c13.883-13.746,22.5-32.8,22.5-53.833v-34.203
			C324.288,104.458,315.224,89.924,301.788,82.131z M264.634,28.577c0-4.729,3.848-8.577,8.577-8.577s8.577,3.848,8.577,8.577
			v47.569c-0.028-0.002-0.057-0.001-0.085-0.002c-0.8-0.043-1.605-0.067-2.415-0.067h-14.654V28.577z M162.589,253.642
			c0-9.12,7.419-16.539,16.538-16.539c9.12,0,16.539,7.419,16.539,16.539s-7.419,16.539-16.539,16.539
			C170.008,270.181,162.589,262.762,162.589,253.642z M281.788,271.823c0,30.829-24.623,56.286-54.887,56.748
			c-15.06,0.226-29.23-5.468-39.968-16.043c-6.602-6.502-11.372-14.337-14.075-22.897c2.039,0.354,4.131,0.549,6.269,0.549
			c4.029,0,7.904-0.665,11.532-1.875c1.981,4.515,4.836,8.655,8.496,12.208c7.558,7.337,17.515,11.206,28.038,10.894
			c20.645-0.612,37.441-18.194,37.441-39.193v-42.867c0.894-0.193,1.782-0.408,2.667-0.633c0.096-0.025,0.192-0.051,0.288-0.076
			c4.909-1.272,9.662-3.023,14.199-5.248V271.823z M283.988,198.297c-0.013,0.011-0.025,0.022-0.038,0.032
			c-4.819,3.976-10.313,7.161-16.284,9.352c-0.009,0.003-0.018,0.006-0.027,0.01c-0.799,0.293-1.607,0.565-2.423,0.821
			c-0.083,0.026-0.166,0.053-0.249,0.079c-0.825,0.256-1.657,0.493-2.498,0.711c-0.021,0.005-0.042,0.012-0.063,0.017
			c-0.794,0.205-1.597,0.386-2.404,0.556c-0.368,0.077-0.739,0.144-1.11,0.214c-0.411,0.078-0.824,0.153-1.239,0.222
			c-0.474,0.078-0.949,0.151-1.426,0.217c-0.289,0.04-0.579,0.075-0.87,0.111c-0.548,0.067-1.096,0.134-1.648,0.185l-0.038,0.003
			c-1.708,0.158-3.435,0.25-5.183,0.25c-8.046,0-18.526-3.422-22.426-7.323l-24.706-24.706c-8.869-8.869-17.724-13.18-27.071-13.18
			c-9.347,0-18.202,4.312-27.071,13.18l-24.706,24.706c-3.9,3.901-14.38,7.323-22.426,7.323c-30.767,0-55.797-25.03-55.797-55.797
			v-34.203c0-13.785,11.215-25,25-25h175.346h34.654c0.708,0,1.411,0.037,2.112,0.096c0.088,0.007,0.176,0.012,0.264,0.02
			c0.668,0.063,1.331,0.157,1.989,0.273c0.105,0.019,0.211,0.036,0.316,0.057c0.652,0.124,1.299,0.274,1.94,0.451
			c0.098,0.027,0.195,0.055,0.293,0.083c0.642,0.185,1.278,0.394,1.906,0.631c9.445,3.573,16.181,12.707,16.181,23.389v34.203h0.001
			C304.288,172.574,296.379,188.054,283.988,198.297z"
                    />
                </svg>
            </Button>
        </FilterButtonsStyled>
    )
}

export default FilterButtons

const Button = styled.button`
    background-color: transparent;
    border-style: none;
    padding: 10px;
    width: 45px;
    &:focus {
        color: #517efc;
        fill: #5162fc;
    }
`

const FilterButtonsStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
    margin-top: 10px;
`
