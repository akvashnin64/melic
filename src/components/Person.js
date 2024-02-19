import React from "react";

const dataPersons = [
    {
        idPerson: 1,
        namePerson: "Шалин Андрей Алексеевич",
        branchePerson: "Балаковский филиал"
    },
    {
        idPerson: 2,
        namePerson: "Сагалаев Михаил Александрович",
        branchePerson: "Калининский филиал"
    },
    {
        idPerson: 3,
        namePerson: "Котляр Олег Владимирович",
        branchePerson: "Балаковский филиал"
    },
    {
        idPerson: 4,
        namePerson: "Стаценко Александр Валерьевич",
        branchePerson: "Приволжский филиал"
    },
    {
        idPerson: 5,
        namePerson: "Савельев Владимир Николаевич",
        branchePerson: "Ульяновский филиал"
    },
    {
        idPerson: 6,
        namePerson: "Ткачев Анатолий Александрович",
        branchePerson: "Приволжский филиал"
    },
    {
        idPerson: 7,
        namePerson: "Феденко Анатолий Васильевич",
        branchePerson: "Приволжский филиал"
    },
    {
        idPerson: 8,
        namePerson: "Фомин Николай Георгиевич",
        branchePerson: "Приволжский филиал"
    },
    {
        idPerson: 9,
        namePerson: "Кузнецов Василий Николаевич",
        branchePerson: "Балаковский филиал"
    },
    {
        idPerson: 10,
        namePerson: "Маданов Дмитрий Александрович",
        branchePerson: "Ульяновский филиал"
    },
    {
        idPerson: 11,
        namePerson: "Баурина Наталия Константиновна",
        branchePerson: "Пензенский филиал"
    },
    {
        idPerson: 12,
        namePerson: "Сотников Геннадий Николаевич",
        branchePerson: "Самарский филиал"
    },
    {
        idPerson: 13,
        namePerson: "Журавлев Анатолий Александрович",
        branchePerson: "Пензенский филиал"
    },
    {
        idPerson: 14,
        namePerson: "Горскин Станислав Владимирович",
        branchePerson: "Самарский филиал"
    },
    {
        idPerson: 15,
        namePerson: "Попов Владимир Федорович",
        branchePerson: "Самарский филиал"
    },
    {
        idPerson: 16,
        namePerson: "Логинов Сергей Геннадьевич",
        branchePerson: "Самарский филиал"
    },
    {
        idPerson: 17,
        namePerson: "Плотников Виктор Юрьевич ",
        branchePerson: "Энгельсский филиал"
    },
    {
        idPerson: 18,
        namePerson: "Абдулин Идерес Васильевич",
        branchePerson: "Энгельсский филиал"
    },
    {
        idPerson: 19,
        namePerson: "Каргина Надежда Ивановна",
        branchePerson: "Самарский филиал"
    },
    {
        idPerson: 20,
        namePerson: "Кувшинов Сергей Васильевич",
        branchePerson: "Энгельсский филиал"
    },
    {
        idPerson: 21,
        namePerson: "Савран Александр Иванович",
        branchePerson: "Энгельсский филиал"
    },
    {
        idPerson: 22,
        namePerson: "Климов Алексей Николаевич",
        branchePerson: "Саратовский обв. канал"
    },
    {
        idPerson: 23,
        namePerson: "Денисенков Павел Александрович",
        branchePerson: "Энгельсский филиал"
    },
    {
        idPerson: 24,
        namePerson: "Русаков Дмитрий Николаевич",
        branchePerson: "Саратовский обв. канал"
    },
    {
        idPerson: 25,
        namePerson: "Никитин Сергей Сергеевич",
        branchePerson: "Саратовский обв. канал"
    },
    {
        idPerson: 26,
        namePerson: "Курбатова Любовь Ивановна",
        branchePerson: "Саратовский обв. канал"
    },
    {
        idPerson: 27,
        namePerson: "Некрасов Антон Николаевич",
        branchePerson: "Гидрогеолого-мелиоративная партия"
    },
    {
        idPerson: 28,
        namePerson: "Пестряков Сергей Анатольевич",
        branchePerson: "Гидрогеолого-мелиоративная партия"
    },
    {
        idPerson: 29,
        namePerson: "Егоров Александр Сергеевич",
        branchePerson: "Ершовский филиал"
    },
    {
        idPerson: 30,
        namePerson: "Лисичкин Владимир Анатольевич",
        branchePerson: "Ершовский филиал"
    },
    {
        idPerson: 31,
        namePerson: "Припутников Сергей Васильевич",
        branchePerson: "Ершовский филиал"
    },
    {
        idPerson: 32,
        namePerson: "Самохин Василий Олегович",
        branchePerson: "Ершовский филиал"
    }
]

const getImagePath = (namePicture) => {
    return `/img/persons/person${namePicture}.png`;
  };


const Person = (props) => {      //1 person

    const { namePerson, branchePerson, idPerson } = props.person;

    return(
        <div className="onePerson">
            <img src={getImagePath(idPerson)}/>
            <p>{namePerson}</p>
            <p>{branchePerson}</p>
        </div>
    )
}

const Persons = () => {         //all person
    return(
        <div className="containerPerson">
            {dataPersons.map((person) => (
            <Person key={person.idPerson} person={person} />
        ))}
        </div>
    )
}

export default Persons