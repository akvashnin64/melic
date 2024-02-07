import React from 'react';

const TextBlockAbout = () => {
    return (
        <>
        <div className='mainHeaderAbout'>
            <p>ОБ УЧРЕЖДЕНИИ</p>
        </div>
        <div className='containerTextAbout1'>
            <p>Основной целью ФГБУ «Управление «Саратовмелиоводхоз» является создание необходимых условий для <span className='boldTextAbout1'>увеличения объемов производства высококачественной сельскохозяйственной продукции</span> на основе восстановления и повышения плодородия почв и земель сельскохозяйственного назначения при выполнении комплекса агротехнических, гидромелиоративных, культуртехнических, агролесомелиоративных, водохозяйственных и организационных мероприятий, эксплуатации мелиоративных систем, переданных Учреждению в оперативное управление, и реализации федеральных целевых программ.</p>
            <img src='/img/about1.png'/>
        </div>

        <div className='containerTextAbout2'>
            <div className='imageTextAbout2'>
                <img src='/img/about2.png'/>
            </div>
            
            <div className='textInTextAbout2'>
                <p>СЕГОДНЯ ФГБУ «УПРАВЛЕНИЕ «САРАТОВМЕЛИОВОДХОЗ» –</p>
                <p>это <span className='boldTextAbout2'>11 структурных филиалов</span> по эксплуатации государственных систем и головное Управление. Здесь трудятся около 2000 человек, которыми накоплен огромный бесценный опыт в мелиорации и ежедневными усилиями которых удается не только сохранять, но и развивать мелиоративный комплекс Саратовской, Пензенской, Ульяновской, Самарской областей и р.Мордовия. Управление находится в ведомстве Министерства сельского хозяйства Российской Федерации и подчиняется непосредственно Департаменту мелиорации.</p>
            </div>
        </div>
        </>
    );
    };
  
  export default TextBlockAbout;