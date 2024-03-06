import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

const Vacancy = (props) => {
  const phoneNumbers = [...new Set(props.vacancies.map((vacancy) => vacancy.phone).filter(Boolean))];

  return (
    <Accordion.Item eventKey={props.branchId}>
      <Accordion.Header>{props.name.toUpperCase()}</Accordion.Header>
      <Accordion.Body>
        {props.vacancies.map((vacancy) => (
          <div key={vacancy.idVacancy}>
            {vacancy.vacancy && (
              <div className="vacancyName">
                - {vacancy.vacancy}
              </div>
            )}
          </div>
        ))}
        {phoneNumbers.length > 0 && (
          <div className="phoneVacancy">
            <img className="iconPhone" src="/img/phoneContacts.png"/>
            {phoneNumbers.join(', ')}
          </div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

const Vacancys = () => {
  const [vacancyData, setVacancyData] = useState([]);

  useEffect(() => {
    // Асинхронный запрос на сервер при монтировании компонента
    fetch('http://89.111.154.224:3001/getBranchesForVacancy')
      .then(response => response.json())
      .then(data => {
        // Группировка данных по филиалам
        const groupedData = data.reduce((acc, vacancy) => {
          if (!acc[vacancy.idBranch]) {
            acc[vacancy.idBranch] = [];
          }
          acc[vacancy.idBranch].push(vacancy);
          return acc;
        }, {});

        setVacancyData(groupedData);
      })
      .catch(error => console.error('Ошибка при запросе вакансий: ', error));
  }, []);

  const vacancyComponents = Object.entries(vacancyData).map(([branchId, vacancies]) => {
    return (
      <Vacancy
        key={branchId}
        branchId={branchId}
        name={vacancies[0].nameBranch}
        vacancies={vacancies}
      />
    );
  });

  return (
    <>
    <div className="vacancyHeader">ВАКАНСИИ</div>
    <Accordion defaultActiveKey="0">
      {vacancyComponents}
    </Accordion>  
    </>
    
  );
};

export default Vacancys;