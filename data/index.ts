export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Я придаю большое значение сотрудничеству с клиентами, способствуя открытому общению",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Я очень гибок в вопросах общения по часовых поясам",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Мой стек технологий",
    description: "Я постоянно стараюсь совершенствоваться",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Техноэнтузиаст с увлечением разработкой.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "В настоящее время занимаюсь созданием различных проектов для онлайн-работ.",
    description: "Внутренняя информация.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Хочешь начать проект вместе?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Recipe App",
    des: "Приложение для рецептов с запросами к API, случайных рецептов и избранных рецептов, CRUD для базы данных.",
    img: "/recipe.png",
    iconLists: ["/re.svg", "/ts.svg", "/postgresql.svg", "/prisma.svg"],
    link: "https://github.com/spyguy92/recipes-front",
  },
  {
    id: 2,
    title: "Приложение для распознавания лиц",
    des: "Приложение для распознавания лиц с использованием React.js и CSS.",
    img: "/brain.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/spyguy92/face-recognition-brain-api",
  },
  {
    id: 3,
    title: "Приложение для заметок Laravel",
    des: "Приложение для заметок, использующее Php с Laravel, blade и tailwind css.",
    img: "notes.png",
    iconLists: ["/php.svg", "laravel.svg", "blade.svg", "/tail.svg"],
    link: "https://github.com/spyguy92/notes-laravel",
  },
];

export const testimonials = [
  {
    quote:
      "Этот веб-разработчик – настоящий профессионал. Он быстро понял все требования проекта и предложил инновационные решения. Работа выполнена в срок, а результат превзошел все ожидания!",
    name: "Анна Иванова",
    title: "Анна Иванова",
    img: "Анна.jpg",
  },
  {
    quote:
      "Очень довольны сотрудничеством с этим разработчиком. Он отлично разбирается в своем деле, всегда доступен для общения и готов предложить лучшие варианты для решения задач. Рекомендуем!",
    name: "Игорь Смирнов",
    title: "Технический директор",
    img: "Игорь.jpg",
  },
  {
    quote:
      "Высококлассный специалист! Созданный сайт полностью соответствует нашим ожиданиям. Работа была выполнена с вниманием к деталям и на высоком уровне. Обязательно обратимся снова!",
    name: "Елена Петрова",
    title: "Менеджер по проектам",
    img: "Елена.jpg",
  },
  {
    quote:
      "Прекрасный веб-разработчик! Отличается высоким профессионализмом, умеет работать в срок и учитывает все пожелания клиента. Мы остались очень довольны результатом!",
    name: "Дмитрий Васильев",
    title: "UI/UX дизайнер",
    img: "Дмитрий.jpg",
  },
  {
    quote:
      "Сотрудничество с этим разработчиком было настоящим удовольствием. Он учел все наши пожелания, предложил лучшие решения для проекта, и результат превзошел ожидания. Определенно будем работать в будущем!",
    name: "Мария Кузнецова",
    title: "Специалист по цифровому маркетингу",
    img: "Мария.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Стажер фронтенд-разработчик",
    desc: "Помогал в разработке веб-платформы с использованием React.js, улучшая интерактивность.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Разработчик мобильных приложений - JSM Tech",
    desc: "Разработал и спроектировал мобильное приложение для платформ iOS и Android с использованием React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Проект по разработке мобильных приложений на фрилансе",
    desc: "Возглавил разработку мобильного приложения для клиента, от первоначальной концепции до размещения в магазинах приложений.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Ведущий фронтенд-разработчик",
    desc: "Разрабатывал и поддерживал функционал, ориентированный на пользователя, с использованием современных технологий фронтенда.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];