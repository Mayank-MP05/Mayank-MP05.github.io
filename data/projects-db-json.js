
export const ProjectsDB = [
    {
        route_slug: "hulk-huffman-compressor",
        project_tab: "PROJECTS",
        title: "Hulk Compressor",
        description:
            "Huffman Compression is commonly used for lossless data compression.In this project,Image and Text Data Compression and Encryption using Huffman technique of freq tree. ",
        static_logo_path: HulkHuffMan,
        readme_file_path: MDHulkHuffMan,
        links_to_show: [
            {
                text_to_show: "Github",
                link_url: ""
            }
        ],
    },
    {
        name: "molequilizer",
        title: "Team Molequilzer",
        description:
            "Project Built for all india SIH's Toycathon 2021 built in plain stack but feature rich around problem statement of balancing chemical reaction visually and later integrated periodic table",
        static_logo_path: Molequilizer,
        readme_file_path: MDMolequilizer,
        links: LinksRenderer("molequilizer"),
    },
    {
        name: "vasooli-money-manager",
        title: "Vasooli Money Manager",
        description:
            "This is full flesh money manager app.This app lets us track all your transactions and cash flows whether you spend it or lend it to someone or from someone",
        static_logo_path: VasooliMoney,
        readme_file_path: MDVasooliMoney,
        links: LinksRenderer("vasooli-money-manager"),
    },
    {
        name: "marathi-letter-recognition",
        title: "Marathi Recognition",
        description:
            "Project uses Deep Learning based character recognition. The flask web server is used to minimize complexities.The drawn character on the Canvas will be recognized",
        static_logo_path: MarathiLetterConv,
        readme_file_path: MDMarathiLetterConv,
        links: LinksRenderer("marathi-letter-recognition"),
    },
    {
        name: "car-quality-prediction",
        title: "Car Quality Prediction",
        description:
            "Using Decision Tree and SVM to really process the input attributes of the car sent over flask server and displaying the predicted output (Categorical Nature)",
        static_logo_path: CarQuality,
        readme_file_path: MDCarQuality,
        links: LinksRenderer("car-quality-prediction"),
    },
];