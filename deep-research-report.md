# Глубокое исследование целевой аудитории для NeuroVision

## Контекст и ключевые выводы

NeuroVision работает в категории identity infrastructure: KYC, документная проверка, face match, liveness, antifraud и remote onboarding. Эта категория растет не только потому, что регуляторы требуют customer due diligence, но и потому, что fraud-модели быстро смещаются в сторону синтетических личностей, deepfake-атак, account renting, seller impersonation и abuse масштабируемых цифровых каналов. Для финансовых организаций базовая логика уже закреплена на уровне FATF, EU AMLR, EBA Remote Onboarding Guidelines, FinCEN/SEC/FCA требований, а для нефинансовых платформ драйверами стали seller verification, marketplace due diligence, student-aid fraud, hiring fraud, gig-platform abuse и telecom identity APIs. citeturn3search0turn3search3turn2search3turn2search0turn2search2turn15search12turn1search0turn12search2turn13search0turn16search0

С точки зрения go-to-market для NeuroVision самый сильный краткосрочный спрос находится не просто “в KYC вообще”, а в сегментах, где одновременно есть: обязательность идентификации, высокий fraud pressure, measurable ROI от снижения ручных проверок и достаточно быстрый buyer motion. По этой логике наилучшие первичные сегменты — remittance/EMI, crypto exchanges, marketplaces, crypto exchangers и iGaming. Банки остаются крупнейшим чековым сегментом, но проигрывают по скорости сделки и доступу к ЛПР. Финтех — один из лучших сегментов для масштаба и повторяемой лидогенерации, но в нем самая плотная конкуренция со стороны Sumsub, Veriff, Entrust IDV, Persona, Trulioo, Jumio и AU10TIX. citeturn11search0turn21search1turn3search12turn1search0turn1search1turn22search1turn5search0turn19search0turn6search0turn10search0turn20search12turn19search2turn10search1

Ниже все оценки в блоках приоритизации, каналов, экономики и messaging — это **аналитическая модель под NeuroVision**, а не “рыночная истина”. Я использую шкалу, где **10 = лучше для NeuroVision**. Для критерия “конкуренция” это означает **10 = ниже конкурентное давление / легче дифференцироваться**, а **1 = red ocean**. Модель опирается на публичные регуляторные требования, объем и цифровую зрелость сегментов, публично доступные сигналы по fraud pressure и current vendor landscape. citeturn11search0turn11search8turn22search1turn4search10turn4search5turn23search1turn14search3turn16search0turn2search3turn3search0

## Приоритизация сегментов

### Итоговый рейтинг сегментов

| Сегмент | Размер рынка | Конкуренция | Скорость решения | Средний чек | Вероятность покупки | Срочность боли | Бюджет | Доступ к ЛПР | Итог |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Remittance / EMI / cross-border payments | 8 | 5 | 7 | 8 | 9 | 10 | 8 | 6 | **7.85** |
| Криптобиржи | 7 | 5 | 7 | 8 | 9 | 10 | 8 | 6 | **7.70** |
| Маркетплейсы | 9 | 6 | 6 | 8 | 8 | 8 | 8 | 6 | **7.55** |
| Криптообменники / on-off ramps | 6 | 6 | 8 | 6 | 9 | 10 | 6 | 7 | **7.35** |
| iGaming / online casino | 8 | 5 | 6 | 8 | 8 | 9 | 8 | 5 | **7.35** |
| Финтех | 9 | 4 | 7 | 7 | 8 | 8 | 7 | 6 | **7.20** |
| Брокеры / trading / wealthtech | 7 | 5 | 6 | 8 | 8 | 9 | 8 | 5 | **7.20** |
| Банки | 8 | 3 | 3 | 10 | 7 | 9 | 10 | 3 | **7.00** |
| Betting / sportsbook | 7 | 5 | 6 | 7 | 8 | 9 | 7 | 5 | **6.95** |
| Международные SaaS-сервисы | 9 | 6 | 6 | 7 | 7 | 6 | 7 | 6 | **6.85** |
| МФО / digital lenders | 7 | 6 | 8 | 5 | 8 | 8 | 5 | 7 | **6.80** |
| HR-tech | 7 | 7 | 7 | 6 | 7 | 7 | 6 | 7 | **6.75** |
| Страховые компании | 8 | 5 | 4 | 8 | 7 | 7 | 8 | 5 | **6.70** |
| Delivery-сервисы | 7 | 6 | 7 | 6 | 7 | 7 | 7 | 6 | **6.65** |
| Телеком | 7 | 6 | 4 | 9 | 6 | 7 | 8 | 4 | **6.55** |
| Сервисы аренды | 7 | 6 | 7 | 6 | 6 | 7 | 6 | 6 | **6.40** |
| Образовательные платформы | 6 | 7 | 5 | 5 | 5 | 5 | 4 | 6 | **5.35** |

Базис для ранжирования следующий. Финтех и payments — большой и быстрорастущий пул: McKinsey оценивает мировой fintech revenue примерно в $650 млрд в 2025 году, а также подчеркивает резкое усложнение payments и digital assets landscape. Crypto-сегменты остаются под прямым FATF/FCA/EU AML режимом, включая CDD и порог €1,000 для CASP-транзакций в новом европейском AML пакете. Gambling-рынок Европы достиг около €123.4 млрд GGR в 2024 году, из которых онлайн — около €47.9 млрд; внутри онлайна на casino приходится 51%, на sports betting 41%. Для marketplaces регуляторным триггером выступают DAC7 и INFORM Consumers Act, которые прямо требуют сбора и проверки seller information. Для HR-tech и education pressure усилился из-за официально признанных government-level кампаний против ghost students и fraudulent remote workers. Для insurance и telecom спрос подпирается масштабом fraud cost и регуляторным движением в сторону stronger identity assurance. citeturn11search0turn11search8turn21search1turn3search12turn2search2turn22search1turn1search0turn1search1turn12search2turn13search1turn23search1turn16search0turn16search4

### Что означает рейтинг для NeuroVision

Для **старта продаж** NeuroVision логичнее всего идти туда, где есть явный pain-to-budget fit: remittance/EMI, crypto exchanges, marketplaces, iGaming и fintech. В этих сегментах проблему легко привязать к деньгам, regulator exposure и conversion loss. Чаще всего buyer already agrees that verification is necessary; спор происходит не о необходимости, а о точности, pass rate, TCO, geography coverage, latency, privacy architecture и SLA. Это лучшая почва для продуктовой дифференциации. citeturn15search11turn21search1turn3search0turn1search0turn1search1turn22search4turn20search4turn19search0turn10search0

Для **крупных чеков** лучшими остаются банки, telecom, крупные marketplaces и страхование. У этих сегментов длиннее procurement, выше security/compliance overhead и чаще возникает требование private cloud, on-prem, local data processing, auditability и кастомной маршрутизации. Если у NeuroVision есть сильный enterprise deployment story, именно здесь можно выиграть у более “self-serve SaaS” конкурентов. citeturn2search3turn3search0turn23search3turn16search4turn18search5

### Идеальный профиль компании по сегментам

| Сегмент | Идеальный профиль компании | Размер / пользователи | География | Стадия | Типичный стек | Compliance / antifraud |
|---|---|---|---|---|---|---|
| Финтех | Wallet, neobank, BNPL, consumer finance app | 100–1,500 FTE; 100k–10m users | EU, UK, MENA, LATAM, SEA | Scale-up / Series B+ / profitable growth | AWS/GCP, microservices, CRM, risk engine, sanction screening | Есть compliance lead; antifraud 2–15 FTE |
| Банки | Retail/digital bank или mobile-first bank unit | 1k–50k+ FTE; 500k–50m users | EU, MENA, CIS, Asia | Mature enterprise / transformation | Core banking + integration layer + SIEM + IAM | Полный compliance, AML, fraud, security |
| МФО | Online lender / app-first lending platform | 50–500 FTE; 50k–2m borrowers | Asia, Africa, LATAM, CEE | Growth / operational scaling | Mobile app, decision engine, CRM, collections | Compliance есть, antifraud lean |
| Криптобиржи | Regulated exchange / CEX | 100–2,000 FTE; 100k–20m users | Global, EU, MENA, APAC | Growth / regulated expansion | KYC provider, KYT, wallet infra, case management | Strong compliance + sanctions + fraud |
| Криптообменники | OTC desk, fiat ramp, regional exchange | 20–300 FTE; 10k–500k users | EEA, MENA, LATAM, CIS | Early growth / license-seeking | Lightweight onboarding, sanctions, CRM | Compliance head; antifraud often merged |
| Betting | Licensed sportsbook | 100–1,500 FTE; 100k–5m bettors | UK, EU, LATAM | Scale / cross-border | PAM/CRM, payment orchestration, responsible gaming | Compliance and fraud shared |
| iGaming | Casino / multi-brand gaming group | 150–3,000 FTE; 100k–10m players | Malta/EU/UK/LATAM | Scale / multi-brand expansion | PAM, CRM, payment routing, risk | Strong KYC, RG, fraud ops |
| Маркетплейсы | Two-sided e-commerce or services platform | 200–10,000 FTE; 50k–20m sellers/users | US, EU, LATAM, MENA | Scale / platform governance | Seller onboarding, trust & safety, payments | Trust & Safety + seller compliance |
| Delivery | Courier marketplace / food delivery / last-mile | 200–20,000 FTE; 10k–2m couriers | Global mega-cities | Scale / regional expansion | Worker onboarding, dispatch, fraud tools | Fraud / safety team, light compliance |
| Сервисы аренды | Short-term rental, carshare, equipment rental | 50–2,000 FTE; 10k–5m renters/hosts | EU, US, tourism hubs | Growth / risk formalization | Booking, deposits, billing, claims | Trust & Safety; limited formal AML |
| HR-tech | Hiring, staffing, contractor platforms, EOR | 100–5,000 FTE; 10k–5m candidates | US, EU, global remote hiring | Scale / complianceization | ATS, HRIS, background-check APIs | Legal/compliance + trust/safety |
| Образование | Online university, bootcamp, ed-platform | 50–2,000 FTE; 10k–1m students | US, EU, MENA, APAC | Growth / online-first | LMS, SIS, CRM, payment stack | Light compliance; anti-abuse emerging |
| Страхование | Digital insurer, aggregator, life/health onboarding | 200–20,000 FTE; 100k–30m policyholders | US, EU, APAC | Mature / digitization | Policy admin, claims, CRM, fraud analytics | Compliance + claims antifraud |
| Телеком | Mobile operator, MVNO, eSIM distributor | 1k–100k FTE; 1m–100m subscribers | Asia, EU, MENA, LATAM | Mature / API monetization | Subscriber mgmt, KYC, CRM, fraud systems | Security, fraud, reg affairs |
| Международные SaaS | SaaS with high abuse risk or payout/admin risk | 50–5,000 FTE; 10k–50m accounts | Global | Growth / trust hardening | Identity layer, IAM, billing, abuse tooling | Trust & Safety more common than AML |
| Remittance / EMI | Cross-border transfer, wallet, EMI, PSP | 100–5,000 FTE; 100k–20m users | EU, UK, GCC, SEA, Africa | Scale / license expansion | Payments core, sanctions, KYC, case mgmt | Mature compliance + fraud |
| Брокеры / trading | CFD, forex, brokerage app, wealth platform | 100–5,000 FTE; 50k–10m users | EU, UK, MENA, APAC | Scale / multi-license | Trading platform, CRM, KYC, suitability | Strong compliance + risk |

Этот ICP-паттерн подтверждается регуляторной и рыночной структурой. EBA прямо описывает требования к remote onboarding для credit and financial institutions; FATF и FCA ставят crypto/VASP в тот же CDD-контур, что и финансовые организации; SEC/FinCEN делают то же для broker-dealers; FTC и Европейская комиссия требуют seller due diligence для marketplaces; UK Gambling Commission — customer verification и enhanced due diligence для gambling; USCIS/DHS и DOJ/FBI фактически создали новый спрос на identity proofing в hiring и contractor verification; Department of Education — в student verification; telecom движется в сторону network-grade identity verification, SIM anti-fraud и wallet-based ID flows. citeturn2search3turn21search1turn2search2turn15search12turn1search0turn1search17turn13search3turn13search1turn12search2turn16search0turn16search4

## Customer profile и buying committee

### Участники сделки

| Роль | KPI | Мотивация | Страхи | Типичное возражение | Влияние |
|---|---|---|---|---|---|
| CEO | Revenue growth, margin, regulatory stability | Ускорить рост без скандалов и штрафов | Fraud scandal, blocked expansion, conversion loss | “Это не стратегический приоритет” | Очень высокое |
| COO | Cost-to-serve, onboarding SLA, ops productivity | Уменьшить ручные проверки и очереди | Рост backlog, ручные издержки | “Слишком много изменений в операциях” | Высокое |
| CPO | Activation, onboarding CVR, UX | Снизить drop-off и false reject | UX friction, негативный NPS | “KYC убьет конверсию” | Высокое |
| CTO | Reliability, integration effort, platform risk | Надежная интеграция и масштабируемость | Vendor lock-in, latency, SDK issues | “Сложно внедрять и поддерживать” | Высокое |
| CIO | Architecture governance, security, vendor compliance | Контроль над данными и рисками | Non-compliant vendor, data exposure | “Нам нужен private/on-prem вариант” | Средне-высокое |
| Head of Risk | Loss rate, suspicious case quality | Снизить fraud loss и false approval | Deepfakes, synthetic IDs, ATO | “Не доказана точность на наших кейсах” | Очень высокое |
| Head of Compliance | Audit readiness, AML/KYC adherence | Закрыть regulatory gaps | Fine, remediation plan, failed audit | “Нужен полный audit trail и policy fit” | Очень высокое |
| AML Officer / MLRO | CDD quality, EDD workload, SAR quality | Автоматизировать low-risk поток | Missing red flags, regulator scrutiny | “Нам мало просто IDV — нужен workflow fit” | Высокое |
| Fraud Manager | Fraud rate, abuse detection, manual review ratio | Быстрее ловить новые паттерны мошенничества | Account farming, ID renting, document fraud | “Сейчас больше болит behavioral fraud” | Очень высокое |
| Product Manager | Time-to-launch, approval rate, support tickets | Запустить flow без product debt | Long integration, poor UX, retries | “Слишком тяжело для roadmap” | Среднее |
| Security Manager | Data security, privacy, access controls | Минимизировать breach/exfiltration risk | PII leakage, third-party exposure | “Не видим достаточного security posture” | Средне-высокое |

### Кто реально двигает сделку по сегментам

| Сегмент | Чемпион | Экономический покупатель | Технический блокер | Кто чаще выигрывает аргументом |
|---|---|---|---|---|
| Финтех | Head of Risk / Product | COO / CEO | CTO | ROI + conversion |
| Банки | Compliance / Risk | COO / CIO | Architecture / Security | Compliance + deployment model |
| МФО | COO / Fraud Lead | CEO | CTO | Скорость + unit economics |
| Криптобиржи | Compliance / Risk | COO / CEO | CTO | Licensing + sanctions pressure |
| Криптообменники | Founder / Compliance | Founder / COO | Tech lead | Speed-to-license |
| Betting | Compliance / Fraud | COO | CTO | Audit readiness + fraud |
| iGaming | Risk / Payments / Compliance | COO | Product + engineering | Fraud + player onboarding |
| Маркетплейсы | Trust & Safety / Seller Ops | COO / GM | Platform engineering | Seller compliance + abuse reduction |
| Delivery | Fraud / Safety | COO | Ops tooling / engineering | Courier trust + re-verification |
| Сервисы аренды | Trust & Safety | COO / GM | Engineering | Guest/host verification |
| HR-tech | Legal / Trust / Ops | COO / CEO | ATS/integration owner | Fraud + compliance proof |
| Образование | Enrollment Ops / Compliance | COO / CFO | SIS/LMS owner | Fraud leakage reduction |
| Страхование | Fraud / onboarding ops | COO / CIO | Enterprise IT | Claims + onboarding savings |
| Телеком | Fraud / security / regulatory affairs | CIO / COO | Core systems team | Identity assurance + anti-scam |
| Международные SaaS | Trust & Safety / abuse | COO / VP Product | Platform security | Abuse prevention |
| Remittance / EMI | Compliance / Risk | COO / CEO | CTO | AML/KYC + approval speed |
| Брокеры / trading | Compliance / onboarding ops | COO / CEO | CTO | CIP/AML + activation speed |

Покупка IDV/KYC обычно не является чисто “IT-buy”. В regulated и fraud-sensitive сегментах чемпионом чаще выступает Risk или Compliance, а сделка закрывается только тогда, когда Product и Engineering видят приемлемый UX/integration tradeoff. Это особенно заметно в finance, crypto, gambling и brokerages, где KYC — часть допуска к рынку, а не nice-to-have. В marketplaces, delivery, rentals и SaaS инициатором чаще становится Trust & Safety, Seller Ops или Abuse Prevention. В HR-tech и education спрос чаще реактивный: он усиливается после инцидентов или после policy/regulatory change. citeturn3search0turn2search3turn21search1turn1search17turn1search0turn12search2turn13search0

## Jobs to Be Done, триггеры, боли и возражения

### Jobs to Be Done

| Тип JTBD | Когда… | Я хочу… | Чтобы… | Наиболее релевантные сегменты |
|---|---|---|---|---|
| Функциональный | Когда клиент регистрируется удаленно | быстро проверить документ, лицо и liveness | допускать реальных пользователей и отсеивать фрод | Финтех, банки, crypto, EMI, brokers |
| Функциональный | Когда мы запускаемся в новой стране | принимать локальные документы и правила KYC | выйти на рынок без ручного хаоса | Финтех, crypto, iGaming, SaaS |
| Функциональный | Когда растет manual review backlog | автоматизировать low-risk кейсы | сократить cost per onboarded user | Банки, EMI, fintech, insurance |
| Функциональный | Когда подключаем продавцов / мерчантов / исполнителей | проверять физлиц и владельцев бизнеса | снизить seller abuse и regulatory exposure | Маркетплейсы, delivery, rentals, SaaS |
| Функциональный | Когда нужно пере-подтвердить пользователя | делать reverification быстро и выборочно | не допускать account renting и ATO | Delivery, gig, iGaming, crypto |
| Эмоциональный | Когда compliance team под давлением регулятора | иметь прозрачный audit trail | не бояться проверки и штрафов | Банки, EMI, brokers, crypto |
| Эмоциональный | Когда fraud team проигрывает AI/Deepfake-атакам | иметь защиту “по умолчанию” | чувствовать контроль над новым типом риска | Финтех, crypto, HR-tech, SaaS |
| Эмоциональный | Когда product team видит падение конверсии | доказать, что безопасный onboarding может быть быстрым | не воспринимать KYC как тормоз роста | Финтех, iGaming, MFO, marketplaces |
| Социальный | Когда board или investors спрашивают про risk posture | показать зрелый control framework | выглядеть enterprise-ready | Финтех, SaaS, crypto, marketplaces |
| Социальный | Когда компания получает лицензию | продемонстрировать “best practice” verification | укрепить доверие партнеров и банков | Crypto, payments, betting, brokers |
| Функциональный | Когда нанимаем удаленных сотрудников / подрядчиков | убедиться, что человек на экране — это он | не получить fraudulent hire или sanctions risk | HR-tech, SaaS, BPO |
| Функциональный | Когда вуз или ed-platform принимает студента онлайн | проверить личность до доступа к услугам и выплатам | остановить ghost students и refund fraud | Education |

### Триггеры покупки

| Что произошло | Почему возникает потребность | Срочность |
|---|---|---|
| Вырос fraud rate на onboarding | Текущий flow пропускает synthetic / fake IDs / deepfakes | Очень высокая |
| Регулятор усилил KYC/AML требования | Нужен формально приемлемый CDD flow | Очень высокая |
| Компания получает лицензию | Без KYC vendor нельзя пройти readiness | Очень высокая |
| Выход в новую страну | Нужна поддержка локальных документов и policy logic | Высокая |
| Резко вырос объем пользователей | Ручная команда не справляется | Высокая |
| Участились chargebacks / first-party fraud | Нужен stronger identity gate | Высокая |
| Audit / inspection выявил gaps | Нужна remediation program | Очень высокая |
| Текущий поставщик поднял цену | Ищут лучшую unit economics | Средняя |
| Текущий поставщик дает низкий pass rate | Потери в конверсии становятся заметными | Высокая |
| Текущий поставщик не покрывает нужные страны | Тормозится экспансия | Высокая |
| Появилась deepfake/media-injection атака | Нужны stronger liveness / face checks | Очень высокая |
| Компания запускает instant approval / instant payouts | Без stronger IDV растет fraud exposure | Высокая |
| Запуск seller / merchant / courier onboarding | Нужна верификация вне классического fintech flow | Высокая |
| Рост manual review cost | Надо сокращать headcount pressure | Средняя |
| Проблемы с data residency | Нужен локальный/частный deployment | Высокая |
| M&A или крупный enterprise client due diligence | Нужно показать mature security/compliance controls | Средняя |
| Негативный PR из-за фрода | Руководство требует быстрых мер | Очень высокая |
| Банк-партнер требует stronger controls | Иначе рискуют потерять banking rails | Очень высокая |
| Переход на mobile-only onboarding | Старый flow плохо работает на смартфонах | Средняя |
| Ввод recurring verification | Требуется не только onboarding, но и reverification | Высокая |
| Переход на B2B2C модель | Нужно верифицировать бизнесы, владельцев и операторов | Высокая |
| Запуск high-risk vertical | Увеличивается санкционный и AML риск | Высокая |

Эти триггеры отражают публичную динамику в нескольких рынках. В crypto и payments у компаний есть прямой regulatory compulsion на CDD; в marketplaces — seller due diligence; в gambling — проверка личности и EDD; в education — государственные меры против identity-based aid fraud; в HR-tech — усилившееся давление из-за remote-worker fraud с использованием stolen and fake identities; в telecom — рост anti-fraud identity API и SIM/KYC сценариев. citeturn21search1turn3search12turn1search0turn1search1turn1search17turn12search2turn13search1turn16search0turn16search3

### Боли и как их решает NeuroVision

| Категория | Боль | Последствия | Стоимость для бизнеса | Как NeuroVision решает |
|---|---|---|---|---|
| Финансовая | Высокий fraud loss на onboarding | Прямые потери, chargebacks, write-offs | От сотен тысяч до миллионов в год | Face match + liveness + document fraud checks снижают допуск bad actors |
| Финансовая | Низкий pass rate хороших пользователей | Потеря выручки и CAC inefficiency | Рост CPA/CAC и падение LTV | Улучшение UX, fewer retries, лучшее document handling |
| Операционная | Большой manual review backlog | SLA ломается, клиенты ждут | Рост FTE и OPEX | Автоматизация low-risk cases и case routing |
| Операционная | Много повторных попыток / user confusion | Support load и churn | Рост тикетов и drop-off | Смарт-подсказки, mobile capture optimization |
| Техническая | Слабая интеграция с текущим стеком | Долгое внедрение и product debt | Медленный rollout, delayed launch | API/SDK-first integration и modular deployment |
| Техническая | Непрозрачная модель принятия решений | Команда не понимает false rejects | Trust gap внутри компании | Audit trail, explainable review states, evidence storage |
| Юридическая | Несоответствие AML/KYC/CIP требованиям | Fines, remediation, licensing risk | Очень высокая | Формализованный flow идентификации и доказуемый контроль |
| Юридическая | Проблемы с data residency / privacy | Срыв закупки enterprise-заказчиком | Потеря сделки | Частный контур / локальная обработка / минимизация PII, если доступно |
| Репутационная | Скандал из-за фрода или impersonation | Потеря доверия клиентов и партнеров | Непрямые, но очень большие | Снижение fraud admissions + stronger trust signals |
| Репутационная | Недоверие со стороны банков-партнеров / PSP | Потеря payment rails / higher reserve | Критично для growth | Более зрелый risk posture и доказуемые controls |

Экономика боли подтверждается внешними данными. LexisNexis сообщает, что в e-commerce и retail в США каждые $1 fraud стоят бизнесу в среднем $4.61, а в финансовых институтах fraud remains widespread and costly; для страхования NAIC ссылается на оценку в $308.6 млрд годового ущерба от fraud; для gig/delivery reports фиксируют массовые multi-accounting и account-renting сценарии; в banking и fintech automation pressure усиливается на фоне growing identity fraud. citeturn4search5turn4search10turn23search1turn14search3turn19search15turn4search9

### Возражения и контраргументы

| Возражение | Что за ним стоит | Контраргумент |
|---|---|---|
| Дорого | Сравнивают только cost/check | Считать нужно cost per approved good user и cost per fraud prevented |
| Уже используем Sumsub | Не видят причины менять | Предлагать не “rip and replace”, а benchmark по pass rate / false reject / latency |
| Уже используем Veriff | Есть inertia и риск миграции | Начинать с одного гео, одного продукта или fallback-route |
| Уже используем Entrust/Onfido | Enterprise comfort zone | Играть от speed, TCO, локального deployment или niche accuracy |
| Уже используем Persona | Любят workflow flexibility | Противопоставить более сильный document/fraud focus там, где это реально важно |
| Долго внедрять | Product team боится roadmap impact | Давать phased integration: pilot, one flow, one geo, one segment |
| У нас нет dev-ресурса | CTO/PM перегружены | Предлагать SDK/iFrame/low-code flow, если доступно |
| Мы не хотим передавать PII третьей стороне | Privacy / security risk | Акцентировать private cloud / on-prem / regional processing, если это сильная сторона |
| Не доказана точность | Нужны собственные данные | Предлагать blind test на historical cases |
| Нам важнее AML, а не просто IDV | Хотят end-to-end workflow | Позиционировать NeuroVision как identity core в AML/KYC stack, а не isolated selfie tool |
| Мы боимся false rejects | Product pressure on conversion | Показывать threshold tuning и segment-specific policy rules |
| Наш сегмент не regulated | Не видят urgency | Продавать через fraud, abuse, trust & safety, payout risk |
| Пользователи не пройдут liveness | UX concern | Делать mobile-first capture и доказывать UX на pilot |
| У нас много стран и документов | Coverage concern | Демонстрировать country pack, fallback logic и acceptance matrix |
| Мы already built in-house | Pride / sunk cost | Сравнивать total maintenance cost и fraud miss cost, а не только sunk engineering |
| У нас маленький объем | Budget sensitivity | Предлагать pilot / modular scope / per-check economics |
| Нам нужен один vendor на все | Vendor consolidation | Предлагать coexistence или specialty slot: doc auth, liveness, risky geos |
| Регулятор нас пока не давит | Low urgency | Показывать cost of waiting через fraud, partner due diligence, future licensing |
| Боюсь vendor lock-in | Technical governance concern | Подчеркивать API-first, exportability, audit data portability |
| Нам нужен local language support | Operational detail | Доказывать localized capture, docs and review workflow |
| Мы боимся, что данные утекут | Security concern | Security pack, DPA, pen test, residency options, least-retention policy |
| Нам не нужен face recognition | Legal/privacy concern | Позиционировать risk-based orchestration и optional biometrics where required |

## Конкурентная карта

Конкурентный ландшафт делится на четыре подтипа:  
во-первых, full-stack KYC/AML platforms для fintech/crypto/gambling;  
во-вторых, enterprise IDV platforms с акцентом на regulated onboarding;  
в-третьих, document-forensics / on-prem players;  
в-четвертых, региональные игроки с сильной привязкой к госинфраструктуре и локальным документам. NeuroVision важно понять, с кем и где она реально встречается в сделке: в fintech/crypto почти всегда это Sumsub, Veriff, Entrust IDV, Persona, Trulioo, Jumio, AU10TIX; в data-sensitive enterprise и CIS/RU contexts — Smart Engines, VisionLabs, Regula, МТС ID KYC, ЕБС/госбиометрические контуры. citeturn20search4turn19search0turn6search0turn10search0turn20search12turn19search2turn10search1turn8search0turn7search4turn18search2turn18search18turn9search4

| Конкурент | Позиционирование | Сильные стороны | Слабые стороны | Публичные цены / ориентир | Целевая аудитория |
|---|---|---|---|---|---|
| Smart Engines | Document-centric OCR/ID auth, часто on-prem | Очень сильное распознавание документов, локальные/он-прем сценарии, low-footprint SDK citeturn8search4turn8search12 | Менее сильное perception как full-stack global KYC brand | Обычно custom; pricing зависит от deployment model citeturn18search5 | Банки, МФО, telecom, гос/enterprise |
| VisionLabs | Биометрия, face recognition, liveness | Сильная face tech, iBeta-tested liveness, enterprise/computer vision reputation citeturn7search4turn8search5 | Не всегда первый выбор как end-to-end AML/KYC orchestration layer | Обычно custom enterprise quote | Банки, security-heavy enterprise, access + onboarding |
| ЕБС / Ростелеком Биометрия | Гос/нац. биометрическая инфраструктура | Регуляторная легитимность и интеграция с российским контуром удаленной идентификации citeturn9search4turn9search9 | Ограниченная международная применимость, не “гибкий SaaS vendor” | Не публичный SaaS price | Банки и regulated public-facing services |
| Regula | Full-stack IDV + document forensics | Глубокая document authenticity, 16k+ документов, enterprise lifecycle approach citeturn18search16turn18search10 | Часто сложнее и “тяжелее” для SMB/self-serve motion | Обычно custom; pricing model varies by deployment & volume citeturn18search5 | Enterprise, travel, banking, gov, high-risk sectors |
| МТС ID KYC | Локальная платформа проверки личности | Российская экосистема, API/Web/Mobile flows, strong local relevance citeturn18search18turn8search9 | Локальная география, слабее global brand | Обычно custom quote | RU/CIS digital services, freelance/gig, onboarding |
| Sumsub | Full-cycle KYC/KYB/AML/fraud | Очень сильное присутствие в fintech, crypto, gaming; 14k+ ID docs; visible pricing citeturn5search5turn19search1turn20search4 | Часто воспринимается как crowded default vendor; price pressure at scale | Basic от $1.35/check, Compliance от $1.85/check; min $149/$299 monthly citeturn20search4 | Fintech, crypto, gaming, marketplaces |
| Veriff | Fast identity verification with self-serve entry | 230+ countries, self-serve pricing, strong conversion-oriented positioning citeturn20search3turn19search0 | Менее broad full-stack AML story compared with some rivals | Essential от $0.80/check, $49/month minimum citeturn19search0 | Startups, fintech, marketplaces, SaaS, mid-market |
| Entrust IDV / Onfido | Enterprise IDV under larger identity-security suite | Enterprise trust, workflow tooling, 2,500+ docs in 195 countries, strong biometrics citeturn6search0turn20search0turn20search6 | Чаще sales-led, выше procurement friction, public pricing нет | Custom enterprise pricing | Banks, payments, regulated enterprise |
| Persona | Flexible identity platform / orchestration | Гибкость workflows, KYB-KYC, fraud + graph + cases, strong product adoption motion citeturn10search0turn19search9turn19search19 | Может быть дорогим при росте usage и сложной конфигурации | От $250/month, 500 free services; далее около $1.50/service on plan examples citeturn10search0turn10search5 | Fintech, marketplaces, SaaS, US-centric growth companies |
| Trulioo | Global data-source-heavy verification platform | 450+ data sources, 195+ countries, strong KYB/global expansion fit citeturn6search1turn20search12 | Меньше public pricing, может быть сложнее для buyer, который хочет simple UX-led selfie flow | Custom pricing | Cross-border fintech, marketplaces, global enterprises |
| Jumio | AI-powered enterprise identity platform | 5,000+ ID types, 200 countries, very strong enterprise and banking credibility citeturn19search2turn19search12 | Sales-led, public pricing нет, нередко выше ACV | Custom; TCO calculator implies enterprise-style annual contracts citeturn10search3 | Banking, regulated enterprise, travel |
| AU10TIX | Fraud-heavy KYC automation | Strong document/authentication positioning, enterprise fraud story, visible min commitment citeturn5search4turn10search1 | Sales-led and more enterprise-oriented than self-serve leaders | “Basic KYC” with $500 monthly minimum; details by quote citeturn10search1 | Enterprise fintech, crypto, gaming, high-risk onboarding |

**Где у NeuroVision есть наилучшая дифференциация против этого поля.**  
Если NeuroVision может доказать хотя бы три из пяти пунктов — better unit economics at scale, stronger document authenticity, better privacy/data-residency posture, faster SDK/mobile integration, stronger liveness against presentation attacks — у нее появляется реальный wedge даже в crowded сегментах. Особенно это важно там, где buyer устал от “generic KYC suite” и хочет либо более высокий pass rate, либо control over deployment, либо lower cost per approved customer. citeturn18search5turn20search4turn19search0turn10search0turn20search0

## Каналы лидогенерации, сообщения и экономика

### Где искать ЛПР

Шкала в матрице ниже: **5 = очень эффективно**, **1 = низкая эффективность**. Это NeuroVision-specific оценка под outbound + demand capture motion.

| Сегмент | Google Search | LinkedIn | Telegram | Конференции | Email / ABM | Партнеры / referrals |
|---|---:|---:|---:|---:|---:|---:|
| Финтех | 4 | 5 | 3 | 5 | 4 | 4 |
| Банки | 3 | 4 | 2 | 5 | 4 | 5 |
| МФО | 3 | 4 | 4 | 4 | 4 | 3 |
| Криптобиржи | 4 | 4 | 5 | 4 | 4 | 4 |
| Криптообменники | 3 | 3 | 5 | 3 | 4 | 3 |
| Betting | 3 | 4 | 4 | 5 | 4 | 4 |
| iGaming | 3 | 4 | 4 | 5 | 4 | 4 |
| Маркетплейсы | 4 | 5 | 3 | 4 | 4 | 5 |
| Delivery | 3 | 4 | 3 | 4 | 4 | 4 |
| Сервисы аренды | 4 | 4 | 3 | 3 | 4 | 4 |
| HR-tech | 4 | 5 | 3 | 4 | 5 | 4 |
| Образование | 3 | 4 | 2 | 4 | 4 | 3 |
| Страхование | 3 | 4 | 2 | 5 | 4 | 5 |
| Телеком | 3 | 4 | 2 | 5 | 4 | 5 |
| Международные SaaS | 5 | 5 | 3 | 4 | 5 | 4 |
| Remittance / EMI | 4 | 5 | 3 | 5 | 4 | 5 |
| Брокеры / trading | 4 | 4 | 4 | 5 | 4 | 4 |

Практически это означает следующее. Для banking, insurance, telecom и крупного payments лучше всего работают **events + partner-led intros + tightly researched ABM**. Для fintech, SaaS и HR-tech наиболее эффективны **LinkedIn + Google demand capture + problem-led outbound email**. Для crypto, gambling и части MFO лучше среднего работают **Telegram communities, founder networks и niche events**, потому что buying conversations идут быстрее и менее формализованно. Эта разница согласуется с тем, как отрасли организованы регуляторно и коммерчески: finance/telecom-heavy buyers тяготеют к formal procurement channels, а crypto/gaming ecosystems сильнее завязаны на community and operator networks. citeturn11search0turn21search1turn22search6turn16search9turn13search1

### Сообщения по сегментам

| Сегмент | Главный оффер | Ключевое ценностное предложение | Elevator pitch | Pain-based message | ROI-based message | Compliance-based message | Antifraud-based message |
|---|---|---|---|---|---|---|---|
| Финтех | “Ускорьте onboarding без роста fraud” | Higher approval rate + lower manual review | Identity infrastructure for fast-growth fintech | “Вы теряете good users на friction и bad users пропускаете” | “Снижайте cost per onboarded active user” | “Готовый KYC foundation для новых рынков” | “Остановите synthetic IDs и deepfakes на входе” |
| Банки | “Enterprise-grade remote onboarding” | Auditability + deployment control | Bank-ready KYC with strong evidence trail | “Ручные проверки не масштабируются” | “Сократите OPEX и backlog” | “Соответствуйте AML/CFT и remote onboarding expectations” | “Снижайте impersonation и document fraud” |
| МФО | “Мгновенная проверка заемщика” | Fast mobile-first lending KYC | Approve borrowers faster with less fraud | “Скоринг бессилен, если identity weak” | “Меньше bad debt и review cost” | “eKYC-ready lending controls” | “Остановите first-party и stolen-ID fraud” |
| Криптобиржи | “License-ready KYC for crypto growth” | Fast CDD + geo scale | KYC core for regulated crypto onboarding | “Регистрация тормозит, regulator pressure растет” | “Lower review cost, faster activation” | “Support FATF/FCA/EU AML expectations” | “Stop mule, synthetic and sanctions-adjacent abuse” |
| Криптообменники | “Запустите compliant onboarding быстро” | Minimal ops, fast verification | KYC that fits lean crypto operations | “Без KYC exchange growth упирается в risk” | “Меньше headcount, больше throughput” | “Prepared for partner and licensing scrutiny” | “Cut fake-ID and drop account abuse” |
| Betting | “Verify bettors without slowing deposits” | Age+identity controls with conversion focus | Trustworthy bettor onboarding for licensed sportsbooks | “Проблемы с identity быстро превращаются в regulator issue” | “Fewer manual checks before first deposit” | “Be ready for customer verification and EDD” | “Reduce bonus abuse and identity misuse” |
| iGaming | “Approve players fast, block fraud faster” | High-volume onboarding + repeat verification | KYC and player trust for casino growth | “Игроки уходят на friction, fraudsters остаются” | “Better GGR capture per acquired player” | “Support safer, auditable onboarding” | “Stop multi-accounting and fake-ID play” |
| Маркетплейсы | “Verify sellers and platform trust at scale” | Seller compliance + abuse reduction | Identity checks for safer two-sided commerce | “Непроверенный seller = counterfeit, scams, legal risk” | “Lower T&S cost per seller” | “Meet DAC7 / INFORM-type verification demands” | “Block seller impersonation and repeat offenders” |
| Delivery | “Know every courier you activate” | Worker verification + re-verification | Verified workforce for safer delivery operations | “Account renting creates safety and fraud exposure” | “Lower claims, reactivations and support load” | “Create evidence-backed worker onboarding” | “Catch account sharing and impersonation” |
| Сервисы аренды | “Verify guests, renters, hosts before risk appears” | Trust for high-value asset access | Identity assurance for trust-based rental flows | “One fake identity can cause outsized loss” | “Reduce deposit fraud and support escalations” | “Documented identity checks for disputes” | “Stop renter/host impersonation” |
| HR-tech | “Verify the person behind the candidate profile” | Remote hiring trust | Candidate identity proofing for distributed hiring | “AI applicants and stolen identities are now operational risk” | “Reduce fraudulent-hire losses” | “Support remote I-9 / eligibility workflows” | “Catch impersonation before offer stage” |
| Образование | “Verify student identity before aid and access” | Enrollment integrity | Student verification for remote admissions | “Ghost students turn enrollment into fraud loss” | “Cut aid leakage and manual verification effort” | “Support identity validation programs” | “Block synthetic or stolen identities” |
| Страхование | “Verify policyholders and claimants with less friction” | Lower fraud at onboarding and claims | Identity assurance for digital insurance journeys | “Identity gaps multiply into fraud loss later” | “Reduce manual review and leakage” | “Strengthen AML/fraud controls where relevant” | “Stop claimant and policy fraud earlier” |
| Телеком | “Verify subscribers and reduce SIM-linked fraud” | Identity assurance for subscriber lifecycle | Telecom-grade subscriber verification | “Weak identity controls fuel scam infrastructure” | “Lower fraud and activation handling cost” | “Support SIM-registration and digital ID initiatives” | “Reduce subscription fraud and impersonation” |
| Международные SaaS | “Add trust to high-risk signups and admin actions” | Abuse prevention without heavy friction | Identity verification for SaaS trust and recovery flows | “Anonymous bad actors waste support, infra, and brand trust” | “Reduce abuse ops cost and fake-account waste” | “Useful for high-risk use cases, payouts, admin flows” | “Block abuse farms and account takeovers” |
| Remittance / EMI | “Compliant onboarding that doesn’t kill activation” | AML-grade KYC with fast approval | Identity verification for money movement at scale | “Every weak onboarding decision becomes regulatory and fraud risk” | “Lower cost per active transacting user” | “Fit for cross-border CDD pressure” | “Stop mule accounts and first-party fraud” |
| Брокеры / trading | “Open accounts faster with stronger CIP evidence” | Faster funded accounts + lower fraud | KYC for trading platforms that need speed and proof | “Funding delays and fraud both damage acquisition efficiency” | “Increase funded-account conversion” | “Support CIP/AML onboarding” | “Block impersonation and risky account creation” |

### Предполагаемая экономика

Ниже — рабочая коммерческая модель для NeuroVision как B2B SaaS vendor в mid-market/enterprise motion. Ориентиры по unit economics grounded в публичных ценах Sumsub, Veriff, Persona и AU10TIX, а также в enterprise-style custom pricing у Entrust/Onfido, Trulioo и Jumio. Это делает разумным прогноз, что NeuroVision может позиционироваться между SMB-friendly self-serve и enterprise custom deal, в зависимости от deployment/volume mix. citeturn20search4turn19search0turn10search0turn10search5turn10search1turn10search3turn6search0turn20search12

| Сегмент | Средний чек в год | Пилот | Длительность сделки | Встреч до сделки | Вероятный CPL | Вероятный CAC | Вероятный LTV |
|---|---:|---:|---|---:|---:|---:|---:|
| Финтех | $25k–120k | $3k–10k | 1.5–4 мес. | 4–8 | $250–700 | $6k–25k | $75k–400k |
| Банки | $100k–500k+ | $10k–40k | 6–12 мес. | 8–16 | $800–2,500 | $30k–120k | $500k–3m+ |
| МФО | $15k–60k | $2k–8k | 1–3 мес. | 3–6 | $150–400 | $4k–12k | $45k–150k |
| Криптобиржи | $40k–250k | $5k–20k | 2–5 мес. | 4–9 | $300–900 | $10k–40k | $150k–900k |
| Криптообменники | $20k–80k | $2k–8k | 1–3 мес. | 3–6 | $200–500 | $5k–18k | $60k–240k |
| Betting | $30k–150k | $4k–12k | 2–4 мес. | 4–8 | $300–800 | $8k–30k | $120k–500k |
| iGaming | $40k–200k | $5k–15k | 2–4 мес. | 4–8 | $350–900 | $10k–35k | $150k–700k |
| Маркетплейсы | $40k–250k | $5k–20k | 2–5 мес. | 5–9 | $300–900 | $10k–45k | $150k–900k |
| Delivery | $25k–120k | $3k–10k | 1.5–4 мес. | 4–7 | $250–700 | $8k–25k | $90k–350k |
| Сервисы аренды | $20k–100k | $3k–8k | 1.5–4 мес. | 4–7 | $250–650 | $7k–22k | $75k–300k |
| HR-tech | $20k–90k | $2k–8k | 1–3 мес. | 3–6 | $200–600 | $6k–20k | $70k–250k |
| Образование | $15k–70k | $2k–6k | 2–5 мес. | 4–8 | $200–500 | $6k–18k | $45k–180k |
| Страхование | $50k–250k | $5k–20k | 3–6 мес. | 5–10 | $400–1,000 | $12k–45k | $200k–900k |
| Телеком | $80k–400k | $8k–30k | 4–9 мес. | 6–12 | $600–1,500 | $20k–70k | $300k–1.5m |
| Международные SaaS | $20k–120k | $2k–10k | 1–4 мес. | 3–7 | $200–700 | $6k–25k | $75k–350k |
| Remittance / EMI | $50k–250k | $5k–20k | 2–5 мес. | 4–9 | $350–1,000 | $12k–45k | $180k–900k |
| Брокеры / trading | $40k–200k | $5k–15k | 2–5 мес. | 4–9 | $300–900 | $10k–35k | $150k–700k |

## Рекомендация для NeuroVision

### Топ сегментов для старта продаж

**Топ-5 для старта продаж**  
1. **Remittance / EMI / cross-border payments**  
2. **Криптобиржи**  
3. **Маркетплейсы**  
4. **iGaming**  
5. **Финтех**

Почему именно они. У всех пяти сегментов есть сочетание четырех признаков: clear compliance pressure, measurable fraud pain, понятная единица ценности и относительно реальный доступ к buyer champion. Для EMI/remittance и crypto спрос подталкивается AML/CFT и licensing pressure. Для marketplaces — seller verification rules и trust & safety economics. Для iGaming — CDD/EDD plus high fraud exposure. Для fintech — большой рынок и большое число targetable accounts. citeturn15search11turn21search1turn3search12turn1search0turn1search1turn22search1turn11search0

### Быстрые лиды, крупные чеки и международная экспансия

**Топ-3 сегмента для быстрого получения лидов**  
**Криптообменники, МФО, HR-tech.**  
У этих сегментов обычно короче цикл, проще доступ к founders/heads, меньше formal procurement и сильнее pain immediacy. В HR-tech запросы дополнительно подогреваются public concern вокруг fraudulent remote workers, а в МФО и crypto-exchanger сегментах buyer быстрее соглашается на pilot. citeturn13search1turn13search0turn17search1turn17search14

**Топ-3 сегмента для крупных чеков**  
**Банки, telecom, marketplaces.**  
Банки и telecom дают самый высокий потенциальный ACV за счет volume, security review и private deployment. Marketplaces могут быстро догонять их по чеку, если речь идет о large seller base, multiple personas и постоянной reverification. citeturn3search0turn2search3turn16search0turn16search4turn1search0turn1search1

**Топ-3 сегмента для международной экспансии**  
**Remittance / EMI, fintech, crypto exchanges.**  
Эти сегменты изначально multijurisdictional, часто требуют coverage across countries/documents and compliance regimes, а потому сильнее ценят гибкость ID coverage, fast rollout и unified API. Это наиболее естественный международный GTM-path для NeuroVision. citeturn11search8turn15search11turn11search0turn21search1turn20search12turn20search3turn19search1

### Какие сегменты атаковать в ближайшие девяносто дней

**Первая тройка на ближайшие 90 дней**

**Remittance / EMI**  
Это лучший баланс между срочностью, бюджетом, чеком и международной масштабируемостью. Message angle: “Compliant onboarding that preserves activation.” Ideal wedge: cross-border senders, wallet onboarding, reverification, high-risk corridors. citeturn15search11turn3search0turn23search9

**Маркетплейсы**  
Здесь особенно силен pain-based outbound: seller impersonation, counterfeit/stolen goods risk, DAC7/INFORM duties, trust & safety OPEX. Хорошая стратегия — не продавать “KYC”, а продавать “seller trust infrastructure”. citeturn1search0turn1search1turn1search11turn4search16

**Криптобиржи**  
У сегмента сильнейший regulatory urgency и понятные buyer champions. Лучший entry wedge — countries expansion, license readiness, lowering review queues, deeper liveness/document checks against synthetic and mule accounts. citeturn21search1turn2search2turn3search12turn21search9

### Финальный вывод

Если NeuroVision хочет получить **максимум продажевого сигнала в короткий срок**, ей не стоит начинать со “всех regulated industries сразу”. Рациональнее построить трехконтурный GTM:

**контур роста** — fintech, EMI/remittance, crypto;  
**контур trust & safety** — marketplaces, delivery, rentals, selected SaaS;  
**контур enterprise expansion** — banks, telecom, insurance.

В ближайшие месяцы правильная логика выглядит так:  
сначала завоевать сегменты, где buyer already convinced that verification is mission-critical;  
затем использовать кейсы и benchmark data из этих вертикалей для входа в более тяжелые enterprise сделки;  
и только после этого масштабироваться в slower, more bespoke markets вроде банков, telecom и страхования. Эта последовательность лучше всего совпадает и с текущей регуляторной средой, и с публично наблюдаемым давлением fraud/compliance на цифровые business models. citeturn3search0turn2search3turn21search1turn1search0turn1search1turn16search0turn23search1turn12search2turn13search1