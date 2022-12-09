import { Component } from 'react';
import yaremcheImg from '../../../assets/yaremche.webp';

class Content extends Component {
  styles = [
    { backgroundColor: 'pink', color: 'black' },
    { backgroundColor: 'gray', color: 'white' },
    { backgroundColor: 'yellow', color: 'black' },
    { backgroundColor: 'blue', color: 'white' },
  ];

  StyleGenerator(styles) {
    let counter = styles.length;
    return () => {
      counter++;
      return styles[counter % styles.length];
    };
  }

  getNextStyle = this.StyleGenerator(this.styles);

  handleChgColor(elementId) {
    const elToChange = document.getElementById(elementId);
    const { backgroundColor, color } = this.getNextStyle();
    elToChange.style.backgroundColor = backgroundColor;
    elToChange.style.color = color;
  }

  render() {
    return (
      <div>
        <p
          id="first-element"
          onClick={() => this.handleChgColor('first-element')}
        >
          Дата і місце народження: 17 листопада 2002 року, м. Луганськ
        </p>
        <p
          id="second-element"
          onClick={() => this.handleChgColor('second-element')}
        >
          Освіта:
          <br />
          Ліцей №1, смт. Макарів
          <br />
          НТУУ "КПІ", м. Київ
        </p>

        <p>Хоббі:</p>
        <ul>
          <li>Футбол</li>
          <li>Велоспорт</li>
          <li>Спортзал</li>
          <li>Астрономія</li>
          <li>Фотографія</li>
        </ul>

        <p>Улюблені фільми:</p>
        <ol>
          <li>"Inception"</li>
          <li>"Blade Runner 2049"</li>
          <li>"Fast & Furious 8"</li>
        </ol>

        <p>
          <b>Яре́мче</b> — місто в Україні, в Надвірнянському районі
          Івано-Франківській області. Розміщене на річці Прут, на автошляху
          Івано-Франківськ — Рахів — Ужгород. Залізниця зв'язує місто з обласним
          центром, Тернополем, Києвом, Чернівцями та Львовом. Яремче —
          кліматичний курорт і центр «зеленого» туризму Прикарпаття та цілої
          Гуцульщини. На території Яремчанського краю розташований Карпатський
          національний природний парк, створений 3 червня 1980 року. Площа парку
          становить 50 495 га. Рельєф території національного парку формувався
          протягом тривалого часу: близько 35 мільйонів років тому на цій
          території існував океан Тетіс. На дні океану нашаровувалися пісок,
          глина, вапняк, які після відступу води скам'яніли та під дією
          природних зовнішніх факторів утворили сучасні гори. У Яремче струмки
          Боярський, Малявський та Явірницький впадають у річку Прут.
        </p>
      </div>
    );
  }
}

export default Content;
