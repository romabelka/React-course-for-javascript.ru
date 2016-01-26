var articles = [
    {
        id: 1,
        title: 'What is Lorem Ipsum?',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        timeStamp: new Date(),
        user: 'roma'
    },
    {
        id: 2,
        title: 'Why do we use Lorem Ipsum?',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        timeStamp: new Date(),
        user: 'roma'
    },
    {
        id: 3,
        title: 'Where does Lorem Ipsum come from?',
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."+
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        timeStamp: new Date(),
        user: 'vasya'
    },
    {
        id: 4,
        title: 'Where can I get some Lorem Ipsum?',
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        timeStamp: new Date(),
        user: 'kolya'
    }
];

var comments = [
    {
        id: 1,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 2,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 3,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 4,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 5,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 6,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 7,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 8,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 9,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 10,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 11,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 12,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 13,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 14,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 15,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 16,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 17,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 18,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 19,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 20,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 21,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 22,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 23,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 24,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    },
    {
        id: 25,
        text: 'first comment',
        timeStamp: new Date(),
        user: 'oleg',
        article: 2
    },
    {
        id: 26,
        text: 'second comment',
        timeStamp: new Date(),
        user: 'roma',
        article: 1
    },
    {
        id: 27,
        text: 'third comment',
        timeStamp: new Date(),
        article: 1,
        user: 'roma'
    }
];

module.exports = {
    comments: comments,
    articles: articles
};