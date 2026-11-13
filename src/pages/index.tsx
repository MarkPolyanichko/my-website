import {useEffect, useRef, type ReactNode, type MouseEvent} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const EMAIL = 'mark-polyanichko@yandex.ru';
const TG_HANDLE = '@MarkPolyanichko';
const TG_HREF = 'https://t.me/MarkPolyanichko';

const stats = [
  {value: '10–12 млрд ₽', label: 'ежемесячный оборот финтех-платформы под моей ответственностью'},
  {value: 'до 100', label: 'человек в ИТ- и продуктовых командах'},
  {value: '85%+', label: 'сервисов переведено из аутсорса в собственный контур'},
  {value: '−35%', label: 'технического долга за счёт реестра и регулярного груминга'},
];

const method = [
  {step: '01', title: 'Описать', text: 'Текущее состояние: процессы, оргструктура, архитектура, долги и риски.'},
  {step: '02', title: 'Измерить', text: 'Ввести метрики там, где их не было, и сделать систему наблюдаемой.'},
  {step: '03', title: 'Посчитать', text: 'Варианты в деньгах: TCO, ROI, стоимость фичи, сценарии перехода.'},
  {step: '04', title: 'Двигаться этапами', text: 'Поэтапная раскатка с мониторингом. Без остановки бизнеса.'},
];

const strengths = [
  {
    title: 'Делаю ИТ-функцию управляемой',
    text: 'Оргструктура, процессы разработки, релизный цикл, реестр технического долга, система метрик, найм и онбординг: с нуля или взамен неработающего.',
  },
  {
    title: 'Веду платформенные миграции',
    text: 'Архитектурный аудит, сценарии перехода с посчитанной экономикой, смена подрядной модели. Ни одна миграция под моим руководством не остановила бизнес.',
  },
  {
    title: 'Говорю на языке денег',
    text: 'P&L, ИТ-бюджет, TCO сервисов, ROI инициатив. Перевожу бизнес-приоритеты в архитектурные и ресурсные решения и обратно.',
  },
  {
    title: 'Меняю то, как команда работает',
    text: 'Внедрение ИИ в цикл разработки: замер базового уровня, регламент, ИИ-ассистированное код-ревью, замер эффекта. Тот же метод раньше применял к agile, CI/CD и продуктовым метрикам.',
  },
  {
    title: 'Встраиваю безопасность в основу',
    text: 'Профильное образование по защите информации. ИБ с нуля до прохождения банковского аудита, 152-ФЗ, PCI DSS, требования к государственным сервисам.',
  },
];

type Role = {
  period: string;
  title: string;
  company: string;
  summary: string;
  points: string[];
  current?: boolean;
};

const roles: Role[] = [
  {
    period: '07.2025 — н.в.',
    current: true,
    title: 'CTO',
    company: 'МОЗЕН · ДЗО АБ Холдинг, экосистема Альфа-Банка',
    summary:
      'Финтех-платформа единичных и реестровых выплат для такси, доставки, промышленности и других отраслей. Оборот около 10–12 млрд ₽ в месяц, в подчинении более 40 человек.',
    points: [
      'За первый квартал: карта процессов, оргструктура as is → to be, реестр техдолга, дашборды; технологический мастер-план защищён на наблюдательном совете',
      'Разработка выведена из аутсорса в инсорс: три сценария с посчитанной стоимостью, более 85% сервисов в собственном контуре',
      'Поэтапная миграция платёжного ядра и клиентской базы; рефакторинг мобильного приложения без роста нагрузки на поддержку',
      'Функция ИБ с нуля до уровня аудита акционера-банка: 152-ФЗ, подготовка к PCI DSS и категорированию КИИ',
      'ИИ в цикле разработки и в продукте: регламенты, AI-код-ревью, бот подачи налоговых деклараций для самозанятых',
    ],
  },
  {
    period: '2025',
    title: 'Директор по продуктам',
    company: 'АНО «Школа 21» · ПАО Сбербанк',
    summary:
      'Единая образовательная SaaS-платформа для B2B и B2G. Продуктовая и техническая команда около 40 человек.',
    points: [
      'Продуктовое видение, участие в технической стратегии, план замещения legacy-платформ',
      'P&L, бюджет платформы, архитектурный надзор и согласование решений',
    ],
  },
  {
    period: '2023 — 2024',
    title: 'Директор продукта',
    company: 'СберОбразование · Edutoria',
    summary:
      'Целевая платформа онлайн-обучения: 5 ИТ-команд и продуктовые команды, до 100 человек, включая DevOps, L1/L2 и архитекторов.',
    points: [
      'Перевод образовательных продуктов с legacy на целевую платформу',
      'ИИ-ассистент на базе GigaChat; LLM для оценки мягких навыков, суммаризации и генерации тестов',
      'Discovery (CJM, JTBD, CustDev) и delivery, roadmap и контроль SLA',
    ],
  },
  {
    period: '2021 — 2023',
    title: 'Ведущий руководитель ИТ-направления',
    company: 'СберОбразование · Edutoria Academy',
    summary:
      'Платформа для высшего образования: от первой пилотной магистратуры в 2022 году до шести программ в 2023-м.',
    points: [
      'Микросервисная архитектура: Java, Spring Boot, Kafka, Kubernetes, React; внедрение CI/CD',
      '100% выполнение метрик GMV, CSI и NPS; due diligence при M&A',
    ],
  },
  {
    period: '2020 — 2021',
    title: 'Руководитель филиала',
    company: 'ИТ-компания «ТАНДЕМ ИС»',
    summary:
      'Платформа цифровизации образования: 40 вузов, включая ведущие исследовательские университеты, и более 100 колледжей.',
    points: [
      'Сервис для иностранных поступающих МГУ, электронный приём абитуриентов уровня субъекта РФ',
      'Участие в ТЗ проекта «Цифровой университет» Минобрнауки России',
    ],
  },
  {
    period: '2016 — 2020',
    title: 'Начальник управления информатизации',
    company: 'Петербургский государственный университет путей сообщения',
    summary:
      '15 филиалов в СЗФО и ЦФО, годовой бюджет более 100 млн ₽: исполнение от 95%, план доходов на 100%.',
    points: [
      'Видеоаналитика на основе ИИ в проектах для ОАО «РЖД»',
      'Совместные проекты с университетами Китая и Вьетнама',
    ],
  },
  {
    period: '2011 — 2015',
    title: 'Разработчик и исследователь',
    company: 'Разработка ПО, наука, преподавание',
    summary:
      'Java, PHP, Oracle, PostgreSQL. Гранты Российского фонда фундаментальных исследований.',
    points: [],
  },
];

const tech = [
  {
    title: 'Инженерия',
    text: 'Java, Spring Boot, Kafka, Kubernetes, React, TypeScript, PostgreSQL, Oracle. Микросервисы, CI/CD, автотесты, observability, резервирование.',
  },
  {
    title: 'ИИ',
    text: 'LLM в продукте, агентная оркестрация (n8n, MCP), ИИ-ассистированное код-ревью, регламенты безопасного использования, замер эффекта.',
  },
  {
    title: 'Управление',
    text: 'Agile, техдолг, дерево метрик, RICE, релизный цикл и поэтапные раскатки, ИТ-бюджет, P&L, TCO и ROI, найм и онбординг.',
  },
  {
    title: 'Безопасность',
    text: '152-ФЗ, PCI DSS, модель угроз, управление уязвимостями, реагирование на инциденты, требования к ГИС.',
  },
];

const credentials = [
  {
    title: 'Кандидат технических наук, доцент',
    text: 'Высшее инженерное образование, ПГУПС: комплексное обеспечение информационной безопасности автоматизированных систем. Обучение по обмену в Великобритании.',
  },
  {
    title: 'Дополнительное образование',
    text: '«IT-директор», «Государственное и муниципальное управление», программа развития руководителей ОАО «РЖД», программа «Управление людьми: мой лидерский стиль» Корпоративного университета Сбербанка.',
  },
];

const honors = [
  {year: '2021', text: 'Финалист конкурса «Лидеры России. ИТ»'},
  {year: '2020', text: 'Полуфиналист конкурса «Лидеры России»'},
  {year: '', text: 'Благодарность федерального министра'},
  {year: '', text: 'Благодарность заместителя Председателя Правления ПАО «Сбербанк»'},
  {year: '', text: 'Благодарности руководителей отраслевых предприятий'},
];

const domains = ['Финтех', 'Образование', 'Госсектор', 'Транспорт'];

const adoptions = [
  {
    year: '2025',
    where: 'МОЗЕН · финтех',
    title: 'AI-native разработка',
    text: 'ИИ встроен в цикл разработки: регламенты, ИИ-ассистированное код-ревью, контролируемый контур. В продакшене — AI-сервис подачи налоговых деклараций для самозанятых.',
  },
  {
    year: '2023',
    where: 'СберОбразование',
    title: 'Генеративный ИИ в обучении',
    text: 'ИИ-ассистент на базе GigaChat и LLM-инициативы: оценка мягких навыков, суммаризация учебного контента, генерация тестов.',
  },
  {
    year: '2021',
    where: 'Edutoria Academy',
    title: 'Платформа онлайн-магистратуры',
    text: 'Микросервисная платформа на Kafka и Kubernetes с CI/CD. От пилотной программы до шести магистратур за год.',
  },
  {
    year: '2020',
    where: 'ТАНДЕМ ИС',
    title: 'Цифровизация образования',
    text: 'Платформа, внедрённая в 40 вузах и более чем 100 колледжах; цифровые сервисы для МГУ и субъекта РФ, участие в «Цифровом университете».',
  },
  {
    year: '2016',
    where: 'ПГУПС · РЖД',
    title: 'Компьютерное зрение в индустрии',
    text: 'Внедрение систем анализа видеоданных на основе ИИ в проектах для ОАО «РЖД» — задолго до массового интереса к ИИ.',
  },
];

const nav = [
  {href: '#about', label: 'Профиль'},
  {href: '#adoptions', label: 'Внедрения'},
  {href: '#method', label: 'Подход'},
  {href: '#experience', label: 'Опыт'},
  {href: '#credentials', label: 'Регалии'},
];

function useReveal(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    root.dataset.anim = 'on';
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.shown);
            io.unobserve(e.target);
          }
        });
      },
      {rootMargin: '0px 0px -6% 0px', threshold: 0.06},
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);
}

function BusinessCard(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div className={styles.cardStage} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className={styles.card} ref={ref}>
        <div className={styles.cardTop}>
          <span className={styles.cardMark}>МП</span>
          <span className={styles.cardTag}>Technology Leader</span>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardName}>Марк Поляничко</div>
          <div className={styles.cardRole}>
            Технологический лидер · CTO
            <br />
            Кандидат технических наук, доцент
          </div>
        </div>
        <div className={styles.cardFoot}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={TG_HREF}>{TG_HANDLE}</a>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  const vcard = useBaseUrl('/contact/mark-polyanichko.vcf');
  const year = new Date().getFullYear();

  return (
    <div className={styles.page} ref={rootRef}>
      <Head>
        <html lang="ru" />
        <title>Марк Поляничко — технологический лидер, CTO</title>
        <meta
          name="description"
          content="Марк Поляничко — технологический лидер и CTO, к.т.н. Более 14 лет развиваю и внедряю технологии в финтехе, образовании, госсекторе и транспорте: платформы, трансформация, ИИ."
        />
        <meta property="og:title" content="Марк Поляничко — технологический лидер, CTO" />
        <meta
          property="og:description"
          content="Платформы, трансформация и ИИ. МОЗЕН (экосистема Альфа-Банка), Сбер, «Школа 21»."
        />
      </Head>

      <a className={styles.skip} href="#main">
        К содержанию
      </a>

      <header className={styles.topbar}>
        <div className={`${styles.wrap} ${styles.topbarInner}`}>
          <a href="#top" className={styles.brand} aria-label="В начало">
            <span className={styles.brandMark}>МП</span>
            <span className={styles.brandName}>Марк Поляничко</span>
          </a>
          <nav className={styles.nav} aria-label="Разделы">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className={styles.topCta} href="#contact">
            Связаться
          </a>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className={styles.hero} id="top">
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow} data-reveal>
                Технологический лидер · CTO
              </p>
              <h1 className={styles.heroName} data-reveal>
                Марк
                <br />
                <em>Поляничко</em>
              </h1>
              <p className={styles.lede} data-reveal>
                Более 14 лет развиваю и внедряю технологии, которые меняют
                то, как работают компании и целые отрасли: от ИИ-видеоаналитики
                для РЖД и цифровизации 140+ вузов и колледжей до генеративного
                ИИ в Сбере и AI-native разработки в финтехе.
              </p>
              <p className={styles.heroMeta} data-reveal>
                Финалист «Лидеры России. ИТ» · Кандидат технических наук, доцент
              </p>
              <div className={styles.heroActions} data-reveal>
                <a className={styles.btnPrimary} href={TG_HREF}>
                  Написать в Telegram
                </a>
                <a className={styles.btnGhost} href="#experience">
                  Смотреть опыт
                </a>
              </div>
            </div>
            <div className={styles.heroCard} data-reveal>
              <BusinessCard />
            </div>
          </div>

          <div className={styles.wrap}>
            <dl className={styles.stats}>
              {stats.map((s) => (
                <div className={styles.stat} key={s.label} data-reveal>
                  <dt className={styles.statValue}>{s.value}</dt>
                  <dd className={styles.statLabel}>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* PROFILE */}
        <section className={styles.section} id="about">
          <div className={`${styles.wrap} ${styles.split}`}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.sectionNum}>I</span>
              <h2 className={styles.h2}>Лидерство в технологиях</h2>
            </div>
            <div className={styles.aboutBody}>
              <blockquote className={styles.quote} data-reveal>
                Одинаково уверенно защищаю бюджет перед наблюдательным советом
                и разбираю архитектурное решение с командой.
              </blockquote>
              <p data-reveal>
                Начинал разработчиком на Java. Больше десяти лет руковожу ИТ-
                и продуктовыми направлениями: от ИТ-департамента университета
                с 15 филиалами до команд в 100 человек в экосистеме Сбера.
                В 2025 году перешёл от продуктового руководства к полной
                технической ответственности за высоконагруженный
                финтех-продукт.
              </p>
              <p data-reveal>
                Сейчас мой фокус — перевод компании в AI-native режим работы.
                Не отдельные ИИ-фичи, а изменение того, как команда делает
                продукт. Строю решения для долгой жизни, а не быстрый
                результат, который потом дорого содержать.
              </p>
              <ul className={styles.domains} data-reveal aria-label="Отрасли">
                {domains.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ADOPTIONS */}
        <section className={`${styles.section} ${styles.sectionAlt}`} id="adoptions">
          <div className={styles.wrap}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.sectionNum}>II</span>
              <h2 className={styles.h2}>Технологии, которые я внедрил</h2>
            </div>
            <p className={styles.sectionLede} data-reveal>
              Каждые несколько лет я приводил в организацию технологию,
              которая на тот момент была передним краем, и доводил её
              до промышленной эксплуатации.
            </p>
            <ol className={styles.adoptions}>
              {adoptions.map((a) => (
                <li className={styles.adoption} key={a.title} data-reveal>
                  <span className={styles.adoptionYear}>{a.year}</span>
                  <div>
                    <span className={styles.adoptionWhere}>{a.where}</span>
                    <h3 className={styles.adoptionTitle}>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* METHOD + STRENGTHS */}
        <section className={styles.section} id="method">
          <div className={styles.wrap}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.sectionNum}>III</span>
              <h2 className={styles.h2}>Подход</h2>
            </div>
            <ol className={styles.method}>
              {method.map((m) => (
                <li className={styles.methodStep} key={m.step} data-reveal>
                  <span className={styles.methodNum}>{m.step}</span>
                  <h3 className={styles.methodTitle}>{m.title}</h3>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>

            <h3 className={styles.subhead} data-reveal>
              Что я делаю лучше всего
            </h3>
            <div className={styles.strengths}>
              {strengths.map((s, i) => (
                <article className={styles.strength} key={s.title} data-reveal>
                  <span className={styles.strengthIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <h4 className={styles.strengthTitle}>{s.title}</h4>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className={`${styles.section} ${styles.sectionAlt}`} id="experience">
          <div className={styles.wrap}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.sectionNum}>IV</span>
              <h2 className={styles.h2}>Опыт</h2>
            </div>
            <ol className={styles.timeline}>
              {roles.map((r) => (
                <li className={styles.role} key={r.period + r.title} data-reveal>
                  <div className={styles.rolePeriod}>
                    {r.period}
                    {r.current && <span className={styles.now}>сейчас</span>}
                  </div>
                  <div className={styles.roleMain}>
                    <h3 className={styles.roleTitle}>{r.title}</h3>
                    <div className={styles.roleCompany}>{r.company}</div>
                    <p className={styles.roleSummary}>{r.summary}</p>
                    {r.points.length > 0 && (
                      <ul className={styles.rolePoints}>
                        {r.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TECH */}
        <section className={styles.section} id="expertise">
          <div className={styles.wrap}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.sectionNum}>V</span>
              <h2 className={styles.h2}>Технологии и практики</h2>
            </div>
            <div className={styles.tech}>
              {tech.map((t) => (
                <article className={styles.techItem} key={t.title} data-reveal>
                  <h3 className={styles.techTitle}>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className={`${styles.section} ${styles.sectionAlt}`} id="credentials">
          <div className={styles.wrap}>
            <div className={styles.sectionHead} data-reveal>
              <span className={styles.sectionNum}>VI</span>
              <h2 className={styles.h2}>Образование и признание</h2>
            </div>
            <div className={styles.credGrid}>
              <div className={styles.credList}>
                {credentials.map((c) => (
                  <div className={styles.cred} key={c.title} data-reveal>
                    <h3 className={styles.credTitle}>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
              <ul className={styles.honors} data-reveal>
                {honors.map((h) => (
                  <li key={h.text}>
                    <span className={styles.honorYear}>{h.year || '✦'}</span>
                    <span>{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className={styles.contact} id="contact">
          <div className={styles.wrap}>
            <p className={styles.eyebrow} data-reveal>
              Контакты
            </p>
            <h2 className={styles.contactTitle} data-reveal>
              Интересны задачи изменения:
              <br />
              <em>собрать, заменить, перестроить</em>
            </h2>
            <p className={styles.contactLede} data-reveal>
              Ищу роль технического руководителя там, где нужно собрать
              инженерную функцию, заменить legacy-платформу или перестроить
              способ работы команды. Важны масштаб, сильная команда
              и возможность принимать решения.
            </p>
            <div className={styles.contactLinks} data-reveal>
              <a href={TG_HREF} className={styles.contactLink}>
                <span>Telegram</span>
                {TG_HANDLE}
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
                <span>Почта</span>
                {EMAIL}
              </a>
              <a href={vcard} download className={styles.contactLink}>
                <span>Визитка</span>
                Сохранить контакт
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <span>© {year} Марк Поляничко</span>
          <span>markpol.ru</span>
        </div>
      </footer>
    </div>
  );
}
