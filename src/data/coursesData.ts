import { LessonModule } from '../types';

export const courseModules: LessonModule[] = [
  // ==========================================
  // PART 1. ChatGPT 기능 & 연동 마스터
  // ==========================================
  {
    id: '1.1',
    partId: 'part-1',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 1. ChatGPT Features & Integrations Master',
    },
    title: {
      ko: '1.1 ChatGPT로 이미지 만들기',
      en: '1.1 Image Generation with ChatGPT',
    },
    subtitle: {
      ko: 'DALL·E 3 및 GPT-4o 기반 고품질 브랜드 이미지 생성과 부분 수정(Inpainting)',
      en: 'High-quality brand image creation & Inpainting with DALL·E 3 & GPT-4o',
    },
    description: {
      ko: 'ChatGPT의 최신 DALL·E 3 및 GPT-4o 비전 기능을 활용하여 마케팅용 제품 이미지, 캐릭터 일러스트, 그리고 선택적 영역 수정(Inpainting) 기법을 실습합니다.',
      en: 'Master creating marketing product graphics, character illustrations, and selective area editing (inpainting) using ChatGPT DALL·E 3 and GPT-4o.',
    },
    iconName: 'Image',
    estimatedMinutes: 20,
    techStack: ['DALL·E 3', 'GPT-4o Vision', 'Prompt Structuring', 'Inpainting Tool'],
    learningGoals: {
      ko: [
        '주제, 화풍, 조명, 비율이 완벽히 구조화된 이미지 생성 프롬프트 작성',
        'Inpainting 브러시 도구로 이미지의 특정 부분만 정밀 수정',
        '동일 캐릭터의 일관된 시각 스타일을 유지하며 다양한 포즈 및 배경 연출',
      ],
      en: [
        'Write structured prompts specifying subject, style, lighting, and aspect ratio',
        'Use the inpainting brush to modify selective image regions seamlessly',
        'Maintain character visual consistency across different poses and scenes',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. 프롬프트 구조화 (주제, 화풍, 조명, 구도, 비율)',
          ko: 'Step 1. 프롬프트 구조화 (주제, 화풍, 조명, 구도, 비율)',
          en: 'Step 1. Structuring Prompts (Subject, Style, Lighting, Composition, Aspect Ratio)',
        },
        summary: {
          ko: '원하는 분위기의 고품질 이미지를 생성하기 위해 5가지 필수 프롬프트 구성 요소를 설계합니다.',
          en: 'Design 5 essential prompt components to create high-fidelity brand illustrations.',
        },
        contentMarkdown: {
          ko: `DALL·E 3에서 원하는 이미지를 얻으려면 명확한 **5가지 구성 요소(주제, 스타일/화풍, 조명, 구도 및 배경, 종횡비)**를 프롬프트에 포함해야 합니다.

### 프롬프트 구성 공식
1. **Subject (주제):** 무엇을 그릴 것인가? (예: 친근한 에코 텀블러 마스코트 캐릭터)
2. **Style (화풍):** 3D 랜더링, 수채화, 픽셀 아트, 플랫 일러스트 등
3. **Lighting (조명):** 부드러운 스튜디오 조명, 시네마틱 골든 아워 등
4. **Composition (구도):** 중앙 배치, 클로즈업, 광각 등
5. **Aspect Ratio (비율):** 16:9, 1:1, 9:16 등`,
          en: `To get accurate image results in DALL·E 3, include 5 key elements in your prompt: Subject, Style, Lighting, Composition, and Aspect Ratio.

### Prompt Formula
1. **Subject:** Eco-friendly tumbler mascot character
2. **Style:** Modern 3D isometric rendering with soft pastels
3. **Lighting:** Warm ambient studio lighting
4. **Composition:** Centered product shot on clean white podium
5. **Aspect Ratio:** 1:1 square for social media`,
        },
        screenshotSpec: {
          title: {
            ko: 'ChatGPT 이미지 생성 프롬프트 입력 및 대기 화면',
            en: 'ChatGPT Image Generation Prompt & Processing View',
          },
          description: {
            ko: '구조화된 프롬프트 입력 후 DALL·E 3가 이미지를 실시간으로 생성하는 화면 스크린샷',
            en: 'Screenshot showing structured prompt submission and real-time DALL·E 3 generation',
          },
          mockType: 'dalle',
          caption: {
            ko: '그림 1.1: ChatGPT DALL·E 3 3D 텀블러 마스코트 캐릭터 생성 예시',
            en: 'Figure 1.1: ChatGPT DALL·E 3 3D Tumbler Mascot Generation Example',
          },
        },
        promptCard: {
          title: {
            ko: '친근한 3D 브랜딩 캐릭터 생성 프롬프트',
            en: 'Friendly 3D Branding Character Prompt',
          },
          promptText: {
            ko: '모던한 3D 아이소메트릭 스타일의 친근한 민트색 에코 텀블러 마스코트 캐릭터를 그려줘. 원목 테이블 위 백색 미니멀 스튜디오 배경에 위치하고 부드러운 햇살 조명과 따뜻한 파스텔 톤을 적용해줘. 1:1 비율의 깔끔한 제품 마케팅용 일러스트레이션이어야 해.',
            en: 'Create a friendly mint-green eco tumbler mascot character in modern 3D isometric rendering style. Place it on a wooden table in a minimal white studio background with soft warm sunlight and pastel colors. Clean 1:1 aspect ratio product marketing illustration.',
          },
          parameters: ['3D isometric', 'mint-green tumbler', 'soft sunlight', '1:1 aspect ratio'],
          explanation: {
            ko: '주제(민트색 텀블러 캐릭터), 화풍(3D 아이소메트릭), 배경(원목 테이블/백색 스튜디오), 조명(부드러운 햇살), 비율(1:1)이 명확히 정의된 최적의 프롬프트입니다.',
            en: 'An optimized prompt defining subject, style, environment, lighting, and aspect ratio.',
          },
        },
        tips: {
          ko: [
            '"고화질로 그려줘", "예쁘게 그려줘" 같은 추상적인 단어보다 "3D 스튜디오 조명", "4K 텍스처"처럼 구체적인 시각적 형용사를 쓰세요.',
            '비율 지정 시 "--ar 16:9" 대신 "16:9 가로 비율로 그려줘"와 같이 자연스러운 한국어/영어 문장으로 지시할 수 있습니다.',
          ],
          en: [
            'Avoid generic words like "high quality". Use specific lighting and material adjectives instead.',
            'Specify aspect ratio naturally in plain sentences, e.g., "Render in 16:9 widescreen format".',
          ],
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. 인페인팅(Inpainting)을 통한 선택적 영역 수정',
          en: 'Step 2. Selective Area Editing via Inpainting',
        },
        summary: {
          ko: '전체 이미지를 다시 그리지 않고 영역 선택 브러시로 특정 요소만 변경합니다.',
          en: 'Modify specific image elements using the selection brush without regenerating the entire canvas.',
        },
        contentMarkdown: {
          ko: `생성된 이미지에서 텀블러 배경에 '나뭇잎 아이콘'을 추가하거나 배경 색상만 교체하고 싶을 때 **Inpainting(Select & Edit)** 기능을 사용합니다.

### 인페인팅 수행 단계
1. 생성된 이미지를 클릭하고 상단 **[수정(Select)]** 브러시 아이콘을 선택합니다.
2. 수정하고 싶은 영역(예: 텀블러 전면부 마크)을 마우스로 칠합니다.
3. 대화창에 "선택한 부분에 작은 녹색 나뭇잎 스티커를 추가해줘"라고 명령합니다.`,
          en: `When you want to add a green leaf sticker or change the background of a generated image without re-creating it from scratch, use the **Inpainting (Select & Edit)** feature.

### Inpainting Steps
1. Click the generated image and select the **Edit (Brush)** icon at the top.
2. Paint over the target region on the canvas with your cursor.
3. Type your instruction: "Add a small green eco leaf sticker on the selected area".`,
        },
        screenshotSpec: {
          title: {
            ko: 'ChatGPT Inpainting 브러시 영역 선택 화면',
            en: 'ChatGPT Inpainting Brush Selection UI View',
          },
          description: {
            ko: '이미지 전면부에 브러시 마스크를 씌우고 부분 수정 프롬프트를 입력하는 스크린샷',
            en: 'Screenshot of applying brush mask over target area and entering selective modification prompt',
          },
          mockType: 'dalle',
          caption: {
            ko: '그림 1.2: DALL·E 3 Inpainting 마스크 영역 선택 및 스티커 추가',
            en: 'Figure 1.2: DALL·E 3 Inpainting Mask Selection & Sticker Addition',
          },
        },
        promptCard: {
          title: {
            ko: '인페인팅 부분 수정 프롬프트',
            en: 'Inpainting Partial Edit Prompt',
          },
          promptText: {
            ko: '선택된 영역의 텀블러 표면에 귀여운 유기농 새싹 스티커를 자연스러운 음영과 텍스처로 합성해줘.',
            en: 'On the selected surface area of the tumbler, blend a cute organic sprout sticker with natural shadows and matching texture.',
          },
          explanation: {
            ko: '브러시로 지정된 마스크 영역 안에서만 스타일을 유지하며 객체를 추가/수정하도록 명령합니다.',
            en: 'Instructs DALL·E to modify only inside the brushed mask area while preserving ambient lighting.',
          },
        },
        tips: {
          ko: [
            '수정할 영역보다 약간 여유 있게 브러시 범위를 선택해야 경계면이 자연스럽게 블렌딩됩니다.',
            '배경 전체를 지우고 브러시를 칠하면 배경 환경(낮 -> 밤)도 신속하게 교체할 수 있습니다.',
          ],
          en: [
            'Brush slightly beyond the target boundary for natural lighting blending.',
            'Brushing the background allows quick day-to-night scene switching.',
          ],
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. 브랜드 캐릭터 스타일 일관성 유지하기',
          en: 'Step 3. Maintaining Character & Style Consistency',
        },
        summary: {
          ko: 'Gen ID 또는 참조 설명을 활용하여 동일한 캐릭터의 다양한 포즈를 생성합니다.',
          en: 'Use Gen ID and feature reference descriptions to maintain character identity across scenes.',
        },
        contentMarkdown: {
          ko: `마케팅 캠페인이나 웹사이트에서 동일한 캐릭터가 책을 읽거나 인사하는 다양한 장면을 연출하려면 캐릭터 고유 식별자 및 특성 묘사를 유지해야 합니다.

### 스타일 일관성 유지 핵심 전략
* **캐릭터 앵커링:** "동일한 민트색 3D 텀블러 마스코트 캐릭터"라는 고유 명칭 반복
* **고유 외형 요소 명시:** "눈은 유광 검정 버튼, 입은 살짝 웃는 곡선, 뚜껑은 메탈릭 시안 고리"
* **동작 및 배경 지시:** 캐릭터의 외형 규격은 고정한 채 동작만 변경("노트북으로 작업 중인 모습")`,
          en: `To use the same mascot across different pages, describe unique anchor features explicitly.

### Key Strategies for Consistency
* **Character Anchoring:** Re-use exact terms: "Same mint-green 3D tumbler mascot"
* **Explicit Features:** "Black button eyes, small curved smile, metallic ring on cap"
* **Action Modifications:** Keep character specifications fixed, only change actions ("Working on a laptop").`,
        },
        screenshotSpec: {
          title: {
            ko: '동일 캐릭터 멀티 포즈 완성본 비교 화면',
            en: 'Multi-Pose Character Consistency Comparison View',
          },
          description: {
            ko: '같은 캐릭터가 인사하는 모습, 공부하는 모습, 음료를 마시는 모습의 3종 세트 스크린샷',
            en: 'Screenshot showing a 3-pose comparison set (greeting, studying, drinking) for the same character',
          },
          mockType: 'dalle',
          caption: {
            ko: '그림 1.3: 동일 캐릭터 파스텔 브랜딩 3종 포즈 완성본',
            en: 'Figure 1.3: Multi-pose Pastel Branding Character Comparison Set',
          },
        },
        promptCard: {
          title: {
            ko: '캐릭터 동작 변경 및 일관성 생성 프롬프트',
            en: 'Character Action Variation & Consistency Prompt',
          },
          promptText: {
            ko: '이전 이미지와 정확히 동일한 민트색 3D 텀블러 마스코트 캐릭터를 유지해줘. 이번에는 캐릭터가 작은 맥북 노트북을 열어두고 안경을 쓴 채 열공하는 포즈를 취하고 있어. 동일한 3D 파스텔 스튜디오 분위기와 원목 테이블 배경을 유지해줘.',
            en: 'Maintain the exact same mint-green 3D tumbler mascot character from the previous image. This time, show the character wearing round glasses and working studiously on a tiny laptop. Keep the identical 3D pastel studio mood and wooden table setting.',
          },
          explanation: {
            ko: '이전 캐릭터 외형 요소를 고정하고 신규 소품(노트북, 안경)과 동작만 변경합니다.',
            en: 'Fixes the visual specs of the character while animating a new pose and props.',
          },
        },
      },
    ],
  },

  // 1.2 심층 리서치 (Deep Research)
  {
    id: '1.2',
    partId: 'part-1',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 1. ChatGPT Features & Integrations Master',
    },
    title: {
      ko: '1.2 심층 리서치 (Deep Research)',
      en: '1.2 Deep Research & Report Synthesis',
    },
    subtitle: {
      ko: '웹 실시간 검색, 논문 및 보고서 데이터 수집, 팩트체크 기반 종합 보고서 작성',
      en: 'Web research, paper analysis, source verification, and structured report drafting',
    },
    description: {
      ko: 'ChatGPT의 검색 및 파일 분석 기능을 활용하여 최신 트렌드 조사, 출처 검증(Fact Checking), 교차 참조, 그리고 고품질 마크다운 보고서 생성을 실습합니다.',
      en: 'Master automated deep research, multi-source cross verification, and executive markdown report generation with ChatGPT.',
    },
    iconName: 'Search',
    estimatedMinutes: 25,
    techStack: ['Deep Research', 'Web Browsing', 'Fact Checking', 'Markdown Exporter'],
    learningGoals: {
      ko: [
        '연구 목표, 데이터 범위, 출처 제한 조건을 포함한 리서치 전용 프롬프트 작성',
        'ChatGPT가 수집한 웹 출처와 인용 태그([1], [2])를 통한 팩트체크',
        '서론-본론-결론 및 시각적 데이터 비교 표가 포함된 완성형 보고서 출력',
      ],
      en: [
        'Formulate specialized research prompts with clear scope, timeline, and domain constraints',
        'Validate source tags ([1], [2]) and cross-reference citations',
        'Format structured markdown executive summaries complete with data comparison tables',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. 리서치 프롬프트 작성 (범위, 출처 조건, 출력 형식)',
          en: 'Step 1. Crafting Research Prompts (Scope, Sources, Output Format)',
        },
        summary: {
          ko: '2026년 생성형 AI 트렌드 조사를 위해 구체적인 리서치 가이드라인을 작성합니다.',
          en: 'Draft a comprehensive research prompt for investigating 2026 Generative AI industry trends.',
        },
        contentMarkdown: {
          ko: `심층 리서치를 진행할 때는 조사 기간(예: 최근 1년 내), 분석 대상 업계(의료, 금융, 소프트웨어), 필요한 시각화 요소(비교 표, SWOT 분석)를 프롬프트에 정확히 정의해야 고품질 결과를 얻을 수 있습니다.`,
          en: `When conducting deep market research, define the timeframe, target industries, and structural output requirements (SWOT analysis, summary tables).`,
        },
        screenshotSpec: {
          title: {
            ko: 'ChatGPT 웹 검색 및 리서치 진행 중 화면',
            en: 'ChatGPT Web Search & Deep Research Execution View',
          },
          description: {
            ko: '실시간으로 관련 웹사이트와 IT 보고서를 탐색하고 요약하는 대화창 스크린샷',
            en: 'Screenshot showing active search queries, source indexing, and research synthesis',
          },
          mockType: 'research',
          caption: {
            ko: '그림 1.4: ChatGPT 실시간 웹 검색 탐색 및 출처 수집 과정',
            en: 'Figure 1.4: ChatGPT Live Web Search & Citation Indexing Process',
          },
        },
        promptCard: {
          title: {
            ko: '2026 생성형 AI 트렌드 심층 리서치 프롬프트',
            en: '2026 Generative AI Trends Deep Research Prompt',
          },
          promptText: {
            ko: '웹 실시간 검색 및 IT 분석 보고서를 참조하여 "2026년 글로벌 생성형 AI 시장 트렌드 및 산업별 도입 사례"에 대한 종합 리서치 보고서를 작성해줘.\n\n[조건]\n1. 분석 범위: 엔터프라이즈 AI, 바이브 코딩(Vibe Coding), 멀티모달 자율주행\n2. 출력 구조: Executive Summary, 주요 기술 트렌드 Top 3, 산업별 도입 사례 (금융/의료/소프트웨어), 도입 시 위험 요소 & 대응 전략\n3. 정보 출처: 인용한 정보는 문장 뒤에 출처 링크 및 태그([1], [2]) 형태로 반드시 명시해줘.',
            en: 'Conduct a comprehensive market research report on "2026 Global Generative AI Market Trends & Industry Case Studies" using live web research.\n\n[Requirements]\n1. Scope: Enterprise AI agents, Vibe Coding, Autonomous Multimodal systems\n2. Structure: Executive Summary, Top 3 Tech Trends, Case Studies (Finance/Healthcare/Dev), Risk Analysis\n3. Citation: Include inline source URL citation tags ([1], [2]) for all key statistics.',
          },
          parameters: ['Market Research', '2026 AI Trends', 'Inline Citations', 'SWOT Analysis'],
          explanation: {
            ko: '리서치 범위, 필수 수록 항목, 출처 태그 명시 조건을 통합하여 신뢰도 높고 정갈한 보고서를 유도합니다.',
            en: 'Combines research constraints, mandatory headings, and strict inline citation rules for high credibility.',
          },
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. 출처 교차 검증 및 팩트체크',
          en: 'Step 2. Citation Cross-Verification & Fact Checking',
        },
        summary: {
          ko: 'ChatGPT가 제시한 각 출처 URL과 인용 수치를 직접 클릭하여 검증합니다.',
          en: 'Click and verify source tags and statistical figures generated by ChatGPT.',
        },
        contentMarkdown: {
          ko: `할루시네이션(환각) 방지를 위해 보고서에 표기된 숫자(예: "시장 성장률 34.5%") 뒤에 붙은 인용 태그를 클릭하여 원문 출처를 확인합니다.

### 팩트체크 체크리스트
* [x] 수치 데이터의 기준 연도(2025~2026년)가 올바른가?
* [x] 인용된 출처가 공신력 있는 기관(Gartner, IDC, McKinsey, OpenAI)인가?
* [x] 상충되는 통계가 있을 경우 두 기관의 견해를 함께 기술했는가?`,
          en: `Verify statistical claims by checking inline citation links against primary industry research reports (Gartner, McKinsey, IDC).`,
        },
        screenshotSpec: {
          title: {
            ko: '출처 태그 호버 및 웹 링크 팩트체크 확인 화면',
            en: 'Source Tag Hover & Citation Inspection UI View',
          },
          description: {
            ko: '보고서 본문의 [1] 태그 마우스 호버 시 원문 출처 팝업과 URL이 노출되는 스크린샷',
            en: 'Screenshot showing popup card with primary URL when hovering over citation tag [1]',
          },
          mockType: 'research',
          caption: {
            ko: '그림 1.5: 인용 태그 클릭 시 웹 원문 출처 하이라이팅',
            en: 'Figure 1.5: Highlighting primary online sources via citation tags',
          },
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. 시각화 표 포함 마크다운 보고서 최종 추출',
          en: 'Step 3. Extracting Structured Markdown Report with Visual Tables',
        },
        summary: {
          ko: '산업별 비교 분석 표를 포함한 최종 마크다운 보고서를 완성합니다.',
          en: 'Finalize the executive report with comparative tables in clean markdown format.',
        },
        contentMarkdown: {
          ko: `수집된 정보를 한눈에 비교할 수 있도록 Markdown Table 형태로 정돈된 리서치 요약 표를 생성하고 Word/Notion으로 내보냅니다.`,
          en: `Export the final report into clean markdown format suitable for Notion, Confluence, or Word documentation.`,
        },
        codeSnippet: {
          filename: '2026_AI_Trend_Report.md',
          language: 'markdown',
          code: `# 📊 2026 생성형 AI 트렌드 & 산업별 도입 사례 보고서

## 1. Executive Summary
* **시장 규모:** 2026년 글로벌 AI 에이전트 시장은 전년 대비 42% 성장한 $85B 달성 전망 [1]
* **핵심 패러다임:** 단순 대화를 넘어 자율 코딩 및 프로세스 자동화를 수행하는 **Vibe Coding & Agentic AI** 확산

## 2. 산업별 도입 현황 비교
| 구분 | 금융 (Finance) | 의료 (Healthcare) | 개발/IT (Software) |
| :--- | :--- | :--- | :--- |
| **주요 활용** | 이상 거래 감지, 자동 투자보고서 | 임상 데이터 분석, 신약 후보물질 탐색 | Vibe Coding, 코드 자동 리팩토링 |
| **대표 도구** | GPT-4o Enterprise, Custom GPTs | BioMed AI, Deep Research | GitHub Copilot, ChatGPT Canvas |
| **주요 성과** | 리포트 작성 시간 65% 단축 | 데이터 검색 정확도 91% 향상 | 소프트웨어 배포 주기 3배 단축 |

> **출처 참조:**
> [1] Gartner AI Industry Outlook 2026 (https://gartner.com/ai-report)
> [2] McKinsey State of AI in 2026`,
        },
      },
    ],
  },

  // 1.3 OpenAI Platform 활용
  {
    id: '1.3',
    partId: 'part-1',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 1. ChatGPT Features & Integrations Master',
    },
    title: {
      ko: '1.3 OpenAI Platform 활용',
      en: '1.3 OpenAI Platform & Playground',
    },
    subtitle: {
      ko: 'API Key 발급, Playground에서 시스템 프롬프트 테스트, Python API 연동',
      en: 'API key setup, System Prompt testing in Playground, and Python integration',
    },
    description: {
      ko: '개발자 관점에서 OpenAI Platform의 API 키를 발급받고, Playground에서 Temperature 및 System Prompt 파라미터를 조정하며 Python 코드로 직접 API를 호출하는 실습을 진행합니다.',
      en: 'Learn developer essentials: API Key provisioning, Playground prompt tuning, Temperature calibration, and first Python API calls.',
    },
    iconName: 'Code',
    estimatedMinutes: 25,
    techStack: ['OpenAI API', 'Playground', 'System Prompt', 'Python openai SDK'],
    learningGoals: {
      ko: [
        'OpenAI API Key 발급 및 환경 변수(.env) 안전 보관법 체득',
        'Playground Chat 모드에서 Temperature, Top_p, Max Tokens 파라미터 작동 원리 이해',
        'Python 및 Node.js 공식 SDK를 활용한 첫 번째 Chat Completion API 연동',
      ],
      en: [
        'Generate API Keys safely and store them inside .env environment variables',
        'Understand Playground parameters: System Prompt, Temperature, Top_p, and Max Tokens',
        'Execute basic Chat Completion API calls using official Python and Node.js SDKs',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. API Key 발급 및 .env 보안 저장',
          en: 'Step 1. Generating API Key & Secure .env Storage',
        },
        summary: {
          ko: 'OpenAI Developer Dashboard에서 API 키를 생성하고 소스코드 유출을 방지합니다.',
          en: 'Create an API Key from OpenAI Platform and protect it from public repository leaks.',
        },
        contentMarkdown: {
          ko: `OpenAI API 키는 절대 Git 리포지토리에 직접 하드코딩해서는 안 됩니다. **.env** 파일에 저장하고 **.gitignore**에 추가해야 합니다.`,
          en: `Never hardcode OpenAI API keys inside source files. Save them in a .env file and exclude it using .gitignore.`,
        },
        screenshotSpec: {
          title: {
            ko: 'OpenAI Platform API Key 생성 팝업 화면',
            en: 'OpenAI Platform API Key Creation Modal View',
          },
          description: {
            ko: 'Secret Key 생성 직후 복사 버튼과 함께 노출되는 보안 경고 팝업 스크린샷',
            en: 'Screenshot showing generated Secret Key with copy button and security warnings',
          },
          mockType: 'openai',
          caption: {
            ko: '그림 1.6: OpenAI Developer Platform API Key 발급 및 안전 보관 안내',
            en: 'Figure 1.6: OpenAI API Key generation and security guidelines',
          },
        },
        codeSnippet: {
          filename: '.env.example',
          language: 'bash',
          code: `# OpenAI API Key Confidential Secret
OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
MODEL_NAME="gpt-4o"`,
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. Playground에서 시스템 프롬프트 및 파라미터 조절',
          en: 'Step 2. Playground Tuning: System Prompt & Parameters',
        },
        summary: {
          ko: 'Temperature(창의성)와 System Prompt(페르소나) 설정에 따른 응답 변화를 실험합니다.',
          en: 'Experiment with Temperature (creativity) and System Prompt (persona) configurations.',
        },
        contentMarkdown: {
          ko: `Playground의 **System Instruction** 영역에 AI의 역할과 응답 규칙을 지정합니다.

### 핵심 파라미터
* **System Prompt:** "너는 10년 차 수석 파이썬 소프트웨어 아키텍트다."
* **Temperature (0.0 ~ 2.0):** 0.2에 가까울수록 코드가 정밀하고 일관되며, 0.8 이상이면 창의적인 답변을 생성합니다.
* **Top_p:** 확률 분포 선택 한계값`,
          en: `Specify the AI role in the Playground System Instruction area.

### Key Parameters
* **System Prompt:** "You are a senior Python architect with 10 years experience."
* **Temperature:** Set to 0.2 for deterministic code generation; set to 0.8+ for creative writing.`,
        },
        screenshotSpec: {
          title: {
            ko: 'OpenAI Playground 설정 패널 및 테스트 화면',
            en: 'OpenAI Playground Control Panel & Chat Execution View',
          },
          description: {
            ko: '좌측 System 창, 중앙 대화창, 우측 Temperature 슬라이더 조절 패널 스크린샷',
            en: 'Screenshot showing System Prompt panel, dialogue window, and Temperature slider controls',
          },
          mockType: 'openai',
          caption: {
            ko: '그림 1.7: OpenAI Playground 파라미터 조절 패널',
            en: 'Figure 1.7: OpenAI Playground Parameter Tuning Controls',
          },
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. Python API 연동 코드 작성 및 실행',
          en: 'Step 3. Writing and Running Python API Integration Code',
        },
        summary: {
          ko: '`openai` 공식 Python 패키지를 설치하고 첫 번째 AI 응답을 호출합니다.',
          en: 'Install official `openai` Python SDK and execute your first chat completion API call.',
        },
        contentMarkdown: {
          ko: `Python 환경에서 \`pip install openai dotenv\` 명령어로 라이브러리를 설치한 후 API를 호출합니다.`,
          en: `Install dependencies via \`pip install openai python-dotenv\` and run the script below.`,
        },
        codeSnippet: {
          filename: 'test_openai_api.py',
          language: 'python',
          code: `import os
from dotenv import load_dotenv
from openai import OpenAI

# 1. .env 환경변수 로드
load_dotenv()

# 2. OpenAI 클라이언트 초기화
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 3. Chat Completion API 호출
response = client.chat.completions.create(
    model="gpt-4o",
    temperature=0.2,
    messages=[
        {"role": "system", "content": "너는 바이브 코딩 전문가이다. 답변은 한국어로 간결하게 핵심만 답변하라."},
        {"role": "user", "content": "파이썬으로 리스트 내 중복 요소 제거하는 가장 빠른 함수 작성해줘."}
    ]
)

# 4. 결과 출력
print("🤖 ChatGPT 응답:")
print(response.choices[0].message.content)`,
        },
      },
    ],
  },

  // 1.4 GitHub 연동
  {
    id: '1.4',
    partId: 'part-1',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 1. ChatGPT Features & Integrations Master',
    },
    title: {
      ko: '1.4 GitHub 연동',
      en: '1.4 GitHub Integration & Copilot',
    },
    subtitle: {
      ko: 'GitHub Copilot / ChatGPT 연동, 리포지토리 코드 분석, Conventional Commit 생성',
      en: 'Repository codebase analysis, bug detection, and automated conventional commit generation',
    },
    description: {
      ko: '오픈소스 리포지토리의 복잡한 코드베이스를 ChatGPT로 신속하게 분석하고, 버그 리팩토링 제안과 Git Diff 기반 커밋 메시지 자동 생성을 실습합니다.',
      en: 'Analyze open-source repositories, detect security flaws, refactor code, and generate conventional commit messages from git diffs.',
    },
    iconName: 'Github',
    estimatedMinutes: 20,
    techStack: ['GitHub Copilot', 'Git Diff Analysis', 'Conventional Commits', 'Code Refactoring'],
    learningGoals: {
      ko: [
        'GitHub 리포지토리 파일 구조와 디렉토리 트리를 ChatGPT에 전달하여 전반적 동작 구조 파악',
        '기존 코드의 메모리 누수 및 버그 자동 탐지 후 리팩토링 제안 반영',
        'Git 변경 사항(git diff) 기반 Conventional Commit 규격 커밋 메시지 자동 생성',
      ],
      en: [
        'Pass repository trees to ChatGPT for swift architectural understanding',
        'Identify memory leaks & bugs, then apply AI refactoring recommendations',
        'Generate conventional git commit messages based on git diff output',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. GitHub 리포지토리 분석 요청',
          en: 'Step 1. Requesting Repository Architecture Analysis',
        },
        summary: {
          ko: '프로젝트 디렉토리 구조와 주요 파일 코드를 ChatGPT에 제시하여 전체 흐름을 파악합니다.',
          en: 'Supply project folder hierarchy to ChatGPT for an instant architectural summary.',
        },
        contentMarkdown: {
          ko: `처음 접하는 오픈소스 프로젝트의 \`tree\` 명령 출력 결과와 \`package.json\` / \`main.ts\` 코드를 전달하여 프로젝트 구조 파악 지침을 내립니다.`,
          en: `Pass the output of \`tree\` and core manifest files to ChatGPT to receive an architectural digest.`,
        },
        screenshotSpec: {
          title: {
            ko: 'GitHub 리포지토리 코드 및 ChatGPT 대화창 연동 화면',
            en: 'GitHub Code Repository & ChatGPT Dialogue UI View',
          },
          description: {
            ko: 'VS Code 내 GitHub Copilot 대화창에서 전체 프로젝트 아키텍처를 분석받는 스크린샷',
            en: 'Screenshot showing GitHub Copilot chat window analyzing overall project structure in VS Code',
          },
          mockType: 'github',
          caption: {
            ko: '그림 1.8: VS Code GitHub Copilot 프로젝트 디렉토리 자동 분석',
            en: 'Figure 1.8: VS Code GitHub Copilot Automated Directory Architecture Analysis',
          },
        },
        promptCard: {
          title: {
            ko: 'GitHub 코드베이스 분석 프롬프트',
            en: 'GitHub Codebase Architecture Analysis Prompt',
          },
          promptText: {
            ko: '아래 제공된 Node.js/Express 프로젝트의 디렉토리 구조와 package.json 내용을 바탕으로 이 앱의 주요 기능, 데이터 흐름, 핵심 진입점(Entry Point) 및 주요 API 엔드포인트를 요약 정리해줘.\n\n[디렉토리 트리]\n/src\n  ├── /controllers\n  ├── /models\n  ├── /routes\n  └── server.ts',
            en: 'Based on the provided project folder structure and package.json, summarize the core application flow, data model relationships, and primary API route entry points.',
          },
          explanation: {
            ko: '새로운 코드베이스에 빠르게 적응하기 위한 가독성 높은 아키텍처 다이어그램 및 요약을 도출합니다.',
            en: 'Generates readable architectural breakdown for quick onboarding onto new codebases.',
          },
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. 코드 버그 탐지 및 리팩토링 제안',
          en: 'Step 2. Bug Detection & Refactoring Recommendations',
        },
        summary: {
          ko: '성능 병목이나 비동기 처리 누수가 있는 소스코드를 개선합니다.',
          en: 'Optimize asynchronous handling bottlenecks and prevent unhandled promise rejections.',
        },
        contentMarkdown: {
          ko: `ChatGPT에게 비동기 코드의 \`try-catch\` 누수 및 메모리 비효율성을 검토하도록 요청합니다.`,
          en: `Ask ChatGPT to review unhandled promise rejections, memory leaks, and missing validation checks.`,
        },
        codeSnippet: {
          filename: 'userController.ts',
          language: 'typescript',
          code: `// ❌ 기존 버그 코드: 비동기 예외 처리 누수 및 DB 커넥션 미반환
export async function getUserData(req: Request, res: Response) {
  const user = await db.query("SELECT * FROM users WHERE id = " + req.params.id); // SQL Injection 위험!
  res.json(user);
}

// ✅ ChatGPT 추천 리팩토링 코드: 파라미터화 쿼리 및 Try-Catch 적용
export async function getUserDataRefactored(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      return res.status(400).json({ error: "유효하지 않은 사용자 ID 형식입니다." });
    }
    
    // 파라미터화 바인딩 쿼리로 SQL Injection 완벽 방지
    const user = await db.query("SELECT id, name, email FROM users WHERE id = $1", [userId]);
    if (!user.rows.length) {
      return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }
    
    return res.json({ success: true, data: user.rows[0] });
  } catch (error) {
    console.error("데이터베이스 조회 중 오류 발생:", error);
    return res.status(500).json({ error: "서버 내부 오류가 발생했습니다." });
  }
}`,
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. Git Diff 이용 Conventional Commit 메시지 생성',
          en: 'Step 3. Generating Conventional Commits from Git Diff',
        },
        summary: {
          ko: '`git diff` 명령 결과를 ChatGPT에 붙여넣어 완벽한 커밋 메시지를 생성합니다.',
          en: 'Paste `git diff` output to receive standardized conventional commit messages.',
        },
        contentMarkdown: {
          ko: `터미널에서 \`git diff\` 명령을 실행한 결과물을 복사하여 ChatGPT에게 전달하면 Conventional Commit 규격(feat, fix, refactor, docs 등)에 맞춘 메시지가 자동 작성됩니다.`,
          en: `Paste terminal \`git diff\` code changes to generate crisp commit messages strictly following Conventional Commit conventions.`,
        },
        promptCard: {
          title: {
            ko: 'Conventional Commit 자동 생성 프롬프트',
            en: 'Conventional Commit Generation Prompt',
          },
          promptText: {
            ko: '아래 제공된 git diff 변경 내용을 분석하여 Conventional Commit 규격(feat, fix, refactor, docs 등)에 따른 한국어 커밋 제목과 짧은 상세 설명 메시지를 작성해줘.\n\n[git diff 내용]\n+ export async function getUserDataRefactored...',
            en: 'Analyze the git diff below and write a Conventional Commit message in English with title and bullet point body.',
          },
          explanation: {
            ko: '팀 단위 협업 시 명확한 커밋 이력을 관리할 수 있도록 규격화된 메시지를 완성합니다.',
            en: 'Standardizes git commit logs across software engineering teams.',
          },
        },
      },
    ],
  },

  // 1.5 Canva 연동
  {
    id: '1.5',
    partId: 'part-1',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 1. ChatGPT Features & Integrations Master',
    },
    title: {
      ko: '1.5 Canva 연동',
      en: '1.5 Canva Integration for Visual Content',
    },
    subtitle: {
      ko: 'Canva GPTs/플러그인 활용, 카드뉴스 및 PPT 템플릿 자동 추천 및 편집',
      en: 'Automated Instagram card news & presentation template generation with Canva GPTs',
    },
    description: {
      ko: 'ChatGPT 내 Canva GPTs를 활용해 마케팅용 카드뉴스 카피라이팅과 연동된 디자인 템플릿을 자동 탐색하고 Canva 에디터에서 즉시 커스텀하는 과정을 학습합니다.',
      en: 'Use Canva GPTs inside ChatGPT to write marketing copy and auto-match Canva design templates for instant editing.',
    },
    iconName: 'Layout',
    estimatedMinutes: 20,
    techStack: ['Canva GPTs', 'Card News Copywriting', 'PPT Automation', 'Template Customizer'],
    learningGoals: {
      ko: [
        'ChatGPT GPTs 스토어에서 Canva 전용 GPTs 활성화 및 계정 연동',
        '타겟 고객층에 맞는 카드뉴스 5장 분량의 카피라이팅 및 비주얼 테마 정의',
        '추천된 Canva 템플릿 URL 클릭으로 에디터 진입 후 최종 디자인 완성',
      ],
      en: [
        'Enable Canva GPTs from ChatGPT GPT Store and connect workflow',
        'Generate 5-page Instagram card news copywriting tailored for target audience',
        'Jump straight to Canva editor using auto-matched template URLs',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. ChatGPT 내 Canva GPTs 플러그인 활성화',
          en: 'Step 1. Activating Canva GPTs Plugin inside ChatGPT',
        },
        summary: {
          ko: 'GPTs 스토어에서 공식 Canva 앱을 탐색하여 연동합니다.',
          en: 'Search and activate official Canva GPTs from the GPT Store.',
        },
        contentMarkdown: {
          ko: `ChatGPT 좌측 상단 **[Explore GPTs]** 메뉴에서 "Canva"를 검색하고 클릭하여 대화창에 연결합니다.`,
          en: `Navigate to **[Explore GPTs]**, search for "Canva", and initiate the plugin integration.`,
        },
        screenshotSpec: {
          title: {
            ko: 'GPTs 탐색기 Canva 플러그인 검색 및 실행 화면',
            en: 'GPTs Store Canva Search & Integration UI View',
          },
          description: {
            ko: 'Canva GPTs 카드와 함께 대화 시작 버튼이 노출되는 스크린샷',
            en: 'Screenshot showing official Canva GPTs card and Start Chat launcher',
          },
          mockType: 'canva',
          caption: {
            ko: '그림 1.9: GPTs Store 내 공식 Canva 연동 템플릿 에이전트',
            en: 'Figure 1.9: Official Canva Template Agent in GPT Store',
          },
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. 카드뉴스 주제 및 텍스트 콘텐츠 생성 요청',
          en: 'Step 2. Generating Card News Copywriting & Layout Outline',
        },
        summary: {
          ko: '인스타그램 마케팅용 5장 카드뉴스 카피를 작성하고 디자인 템플릿을 추천받습니다.',
          en: 'Write 5-slide social copy and request design template matches.',
        },
        contentMarkdown: {
          ko: `"직장인을 위한 생산성 앱 추천" 주제로 헤드라인, 핵심 본문 문구, 행동 유도(CTA) 버튼 문구를 포함한 카드뉴스 카피를 생성합니다.`,
          en: `Generate headline, bullet text, and Call-To-Action copy for a "Top Productivity Apps for Professionals" campaign.`,
        },
        promptCard: {
          title: {
            ko: 'Canva 카드뉴스 자동 디자인 연동 프롬프트',
            en: 'Canva Card News Automated Design Prompt',
          },
          promptText: {
            ko: '인스타그램 마케팅용 "2026 직장인 필수 AI 생산성 도구 TOP 3" 주제로 5장 카드뉴스를 제작해줘. 슬라이드별 핵심 헤드라인과 2줄 요약 문구를 작성하고, 이에 어울리는 세련된 네이비/골드 톤의 Canva 인스타그램 포스트 템플릿 3가지를 추천해줘.',
            en: 'Design a 5-slide Instagram post for "Top 3 AI Productivity Tools in 2026". Write punchy headlines and 2-line summaries for each slide, then suggest 3 matching sleek navy/gold Canva templates.',
          },
          explanation: {
            ko: '카피라이팅 생성과 최적 템플릿 매칭이 동시에 수행되는 Canva 전용 프롬프트입니다.',
            en: 'Generates text copy while simultaneously querying matching Canva design layouts.',
          },
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. Canva 에디터 이동 및 최종 커스텀',
          en: 'Step 3. Opening Canva Editor & Finalizing Artwork',
        },
        summary: {
          ko: 'ChatGPT가 응답한 Canva 템플릿 링크를 클릭하여 웹 에디터에서 텍스트와 레이아웃을 다듬습니다.',
          en: 'Click generated Canva template links to polish typography and alignment in Canva editor.',
        },
        contentMarkdown: {
          ko: `ChatGPT가 제시한 카드 템플릿의 **[Open in Canva]** 버튼을 눌러 에디터로 이동한 후, 폰트 크기 및 브랜드 로고 위치를 조정하고 PNG로 다운로드합니다.`,
          en: `Click **[Open in Canva]** links, adjust font sizing & company logos, then export high-res PNG cards.`,
        },
        screenshotSpec: {
          title: {
            ko: 'Canva 웹 에디터 템플릿 자동 로딩 화면',
            en: 'Canva Web Editor Workspace & Artwork Customization View',
          },
          description: {
            ko: 'ChatGPT에서 넘어온 카드뉴스 텍스트가 Canva 에디터 레이어에 채워져 있는 스크린샷',
            en: 'Screenshot showing populated copywriting elements within Canva graphic editor layers',
          },
          mockType: 'canva',
          caption: {
            ko: '그림 1.10: ChatGPT -> Canva 에디터 연동 자동 제작 결과물',
            en: 'Figure 1.10: Seamless Canva Editor Artwork Customization',
          },
        },
      },
    ],
  },

  // ==========================================
  // PART 2. ChatGPT 바이브 코딩 (Vibe Coding)
  // ==========================================
  {
    id: '2.1',
    partId: 'part-2',
    partTitle: {
      ko: 'Part 2. ChatGPT 바이브 코딩 (Vibe Coding)',
      en: 'Part 2. ChatGPT Vibe Coding Master Class',
    },
    title: {
      ko: '2.1 간단한 웹사이트 개발',
      en: '2.1 Simple Website Development & Vercel Deploy',
    },
    subtitle: {
      ko: '자연어 프롬프트만으로 단일 파일 index.html 랜딩페이지 제작 및 Vercel 배포',
      en: 'Build single-file HTML/Tailwind landing page & deploy to Vercel via Vibe Coding',
    },
    description: {
      ko: '프롬프트 작성만으로 디자인, 레이아웃, 인터랙션이 포함된 웹사이트 코드를 생성하고 VS Code Live Server로 실행 후 Vercel에 1분 만에 무료 배포하는 과정을 실습합니다.',
      en: 'Experience pure Vibe Coding: Prompt a full-featured landing page in HTML/Tailwind, test live locally, and deploy to Vercel instantly.',
    },
    iconName: 'Globe',
    estimatedMinutes: 30,
    techStack: ['Vibe Coding', 'HTML5/TailwindCSS', 'VS Code Live Server', 'Vercel CLI'],
    learningGoals: {
      ko: [
        '웹사이트 구조, 색상 팔레트, 포함할 기능 요구사항을 프롬프트로 명확히 서술',
        'TailwindCSS CDN 및 Lucide 아이콘이 포함된 완벽한 단일 파일 index.html 코드 생성',
        'VS Code Live Server로 로컬 검증 후 Vercel 플랫폼을 통해 실제 접속 가능 웹사이트 배포',
      ],
      en: [
        'Describe landing page layout, theme palette, and components clearly in natural language',
        'Generate all-in-one single-file index.html featuring Tailwind CSS CDN and responsive widgets',
        'Preview locally using VS Code Live Server and deploy to live production via Vercel',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. 기획 및 프롬프트 정의 (구조, 색상, 레이아웃)',
          en: 'Step 1. Planning & Prompt Definition (Structure, Palette, Widgets)',
        },
        summary: {
          ko: '개인 포트폴리오 & 방명록 웹사이트 구축을 위한 통합 프롬프트를 작성합니다.',
          en: 'Formulate an all-inclusive prompt for building a Personal Portfolio & Guestbook site.',
        },
        contentMarkdown: {
          ko: `바이브 코딩의 핵심은 **"단 하나의 통합 파일에 완벽히 작동하는 HTML/Tailwind 코드 작성"**을 지시하는 것입니다.

### 웹사이트 요구 사양
1. **Hero Section:** 타이핑 애니메이션 효과가 들어간 자기소개 헤더
2. **Project Gallery:** 3개 카드 필터링 가능한 프로젝트 포트폴리오
3. **Interactive Guestbook:** LocalStorage 연동 방명록 작성 및 작성글 삭제 기능
4. **Theme Palette:** 깔끔한 슬레이트 백그라운드 & 에메랄드 포인트 컬러`,
          en: `The core of Vibe Coding is requesting self-contained HTML/Tailwind code with zero broken scripts.

### Target Specifications
1. **Hero Section:** Catchy greeting with animated gradient badge
2. **Project Gallery:** 3 responsive portfolio cards with hover effects
3. **Interactive Guestbook:** LocalStorage-backed form for writing & deleting comments
4. **Theme Palette:** Clean Slate background with vibrant Emerald accents.`,
        },
        promptCard: {
          title: {
            ko: '포트폴리오 & 방명록 단일 파일 웹사이트 생성 프롬프트',
            en: 'Single-File Portfolio & Guestbook Website Vibe Coding Prompt',
          },
          promptText: {
            ko: '너는 최고의 프론트엔드 바이브 코딩 개발자다. 단 하나의 `index.html` 파일 안에 완벽히 동작하는 "개인 개발자 포트폴리오 & 방명록 웹사이트" 코드를 전체 출력해줘.\n\n[조건]\n1. Tailwind CSS CDN (`<script src="https://cdn.tailwindcss.com"></script>`) 포함\n2. Lucide Icons CDN 및 Vanilla JS 사용\n3. 구성: (1) Navigation Header (2) Hero 섹션 (3) 프로젝트 갤러리 카드 3개 (4) LocalStorage 저장 기능이 내장된 방명록 작성 폼 및 게시글 리스트 (5) Footer\n4. 반응형 레이아웃(모바일/데스크톱 완벽 지원) 및 코드 생략 없이 전체 출력할 것.',
            en: 'Act as an expert Vibe Coding developer. Output a complete, self-contained `index.html` file for a "Developer Portfolio & Guestbook Website". Include Tailwind CSS CDN, Lucide Icons, interactive LocalStorage guestbook, and mobile responsive layout without omitting code.',
          },
          explanation: {
            ko: '복잡한 빌드 도구 없이 브라우저에서 즉시 실행 가능한 완성형 단일 HTML 코드를 도출합니다.',
            en: 'Generates complete HTML code ready to run directly in any web browser.',
          },
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. ChatGPT 생성 HTML/Tailwind 코드 검토',
          en: 'Step 2. Reviewing ChatGPT Generated Single-File Code',
        },
        summary: {
          ko: '생성된 `index.html` 소스코드를 확인하고 실행 결과를 바로 파악합니다.',
          en: 'Examine generated `index.html` source code and test interactive guestbook logic.',
        },
        contentMarkdown: {
          ko: `아래 코드는 ChatGPT가 생성한 단일 파일 \`index.html\`의 핵심 소스코드 구조입니다.`,
          en: `Below is the functional HTML/Tailwind single-file code snippet generated via Vibe Coding.`,
        },
        codeSnippet: {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>홍길동 | Vibe Coding 개발자 포트폴리오</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen">
  <!-- Navigation Header -->
  <header class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <h1 class="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        VibeDeveloper.dev
      </h1>
      <a href="#guestbook" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition">
        방명록 작성하기
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-5xl mx-auto px-4 py-16 text-center">
    <span class="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold mb-4">
      ✨ ChatGPT 바이브 코딩으로 제작됨
    </span>
    <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-6">
      생각을 코드로 실현하는 개발자
    </h2>
    <p class="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
      AI와 대화하며 아이디어를 신속하게 프로토타이핑하고 고성능 웹 서비스를 구축합니다.
    </p>
  </section>

  <!-- LocalStorage Guestbook Section -->
  <section id="guestbook" class="max-w-2xl mx-auto px-4 py-12 border-t border-slate-800">
    <h3 class="text-2xl font-bold mb-6 text-white text-center">💬 한 줄 방명록</h3>
    <form id="guestForm" class="flex gap-2 mb-8">
      <input type="text" id="guestInput" placeholder="방명록 메시지를 남겨주세요..." required
        class="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500">
      <button type="submit" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition">
        등록
      </button>
    </form>
    <div id="guestList" class="space-y-3"></div>
  </section>

  <script>
    const form = document.getElementById('guestForm');
    const input = document.getElementById('guestInput');
    const list = document.getElementById('guestList');

    let entries = JSON.parse(localStorage.getItem('vibe_guestbook') || '[]');

    function render() {
      list.innerHTML = entries.map((item, idx) => \`
        <div class="p-4 bg-slate-800/60 border border-slate-700 rounded-lg flex items-center justify-between">
          <p class="text-slate-200">\${item}</p>
          <button onclick="removeEntry(\${idx})" class="text-xs text-rose-400 hover:underline">삭제</button>
        </div>
      \`).join('');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      entries.unshift(input.value.trim());
      localStorage.setItem('vibe_guestbook', JSON.stringify(entries));
      input.value = '';
      render();
    });

    window.removeEntry = function(idx) {
      entries.splice(idx, 1);
      localStorage.setItem('vibe_guestbook', JSON.stringify(entries));
      render();
    };

    render();
  </script>
</body>
</html>`,
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. VS Code Live Server 로컬 테스트 및 Vercel 배포',
          en: 'Step 3. Local Live Server Testing & Vercel Free Deployment',
        },
        summary: {
          ko: '로컬 브라우저에서 방명록 기능을 테스트하고 Vercel에 단 1분 만에 웹사이트를 무료 배포합니다.',
          en: 'Test guestbook entries locally and publish live on Vercel within 1 minute.',
        },
        contentMarkdown: {
          ko: `VS Code에서 확장 프로그램 **Live Server**를 설치한 후 \`index.html\`에서 마우스 우클릭 -> **[Open with Live Server]**를 눌러 로컬 동작을 검증합니다.

### Vercel 배포 단계
1. GitHub에 새 리포지토리 생성 후 \`index.html\` 커밋 & 푸시
2. [Vercel.com](https://vercel.com) 로그인 -> **[Add New Project]** 클릭
3. 해당 GitHub 리포지토리 선택 후 **[Deploy]** 버튼 클릭!
4. 생성된 전용 SSL 웹사이트 주소 (\`https://vibe-portfolio.vercel.app\`) 접속 확인`,
          en: `Right-click \`index.html\` in VS Code and select **[Open with Live Server]**. Then import the repo into Vercel for instant deployment.`,
        },
        screenshotSpec: {
          title: {
            ko: 'Vercel 배포 완료 및 라이브 웹사이트 접속 화면',
            en: 'Vercel Deployment Success & Live Website View',
          },
          description: {
            ko: 'Vercel 대시보드에서 축하 폭죽 애니메이션과 함께 라이브 URL이 생성된 화면 스크린샷',
            en: 'Screenshot showing Vercel deployment confetti screen and live URL link',
          },
          mockType: 'web',
          caption: {
            ko: '그림 2.1: Vercel 무료 Web Hosting 배포 성공 화면',
            en: 'Figure 2.1: Successful Live Website Deployment on Vercel',
          },
        },
      },
    ],
  },

  // 2.2 간단한 모바일 앱 개발 & 테스트
  {
    id: '2.2',
    partId: 'part-2',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 2. ChatGPT Vibe Coding Master Class',
    },
    title: {
      ko: '2.2 간단한 모바일 앱 개발 & 테스트',
      en: '2.2 Mobile App Development & Expo Go Testing',
    },
    subtitle: {
      ko: 'React Native (Expo) 기반 To-Do & 습관 트래커 개발 및 스마트폰 실시간 QR 테스트',
      en: 'Build React Native (Expo) Habit Tracker & test live on smartphone using Expo Go QR Code',
    },
    description: {
      ko: 'Expo 프레임워크와 ChatGPT를 활용해 모바일 앱 코드를 생성하고, 스마트폰에 설치한 Expo Go 앱으로 QR 코드를 스캔하여 실시간 모바일 단말기 테스트를 수행합니다.',
      en: 'Create a cross-platform React Native Expo mobile app with ChatGPT and test it live on iOS/Android via Expo Go QR scanning.',
    },
    iconName: 'Smartphone',
    estimatedMinutes: 35,
    techStack: ['React Native', 'Expo SDK', 'AsyncStorage', 'Expo Go App'],
    learningGoals: {
      ko: [
        'Node.js 환경에서 `npx create-expo-app` 명령어로 엑스포 모바일 앱 프로젝트 생성',
        'ChatGPT로 할 일 추가, 삭제, 습관 달성률 체크 및 `@react-native-asyncstorage/asyncstorage` 데이터 저장 코드 구현',
        '스마트폰의 Expo Go 앱으로 QR 코드를 스캔하여 실제 단말기에서 실시간 터치 및 동작 검증',
      ],
      en: [
        'Initialize an Expo mobile project using `npx create-expo-app` CLI',
        'Prompt React Native code with habit completion tracking & persistent AsyncStorage',
        'Scan terminal QR code via smartphone Expo Go app for real-time device testing',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. Expo 프로젝트 생성 및 환경 설정',
          en: 'Step 1. Expo Project Initialization & Environment Setup',
        },
        summary: {
          ko: '터미널에서 명령어 한 줄로 엑스포 모바일 앱 개발 환경을 구축합니다.',
          en: 'Set up cross-platform Expo mobile app workspace in one terminal command.',
        },
        contentMarkdown: {
          ko: `터미널에서 다음 명령어를 순서대로 실행합니다.

\`\`\`bash
npx create-expo-app habit-tracker-app
cd habit-tracker-app
npx expo install @react-native-asyncstorage/asyncstorage
\`\`\``,
          en: `Execute the following commands in your shell terminal:

\`\`\`bash
npx create-expo-app habit-tracker-app
cd habit-tracker-app
npx expo install @react-native-asyncstorage/asyncstorage
\`\`\``,
        },
        screenshotSpec: {
          title: {
            ko: '터미널 Expo 프로젝트 생성 및 명령어 실행 화면',
            en: 'Terminal Expo Project Initialization View',
          },
          description: {
            ko: 'npx create-expo-app 명령어 실행 후 패키지 설치가 완료된 터미널 스크린샷',
            en: 'Screenshot showing package installation progress inside system shell terminal',
          },
          mockType: 'mobile',
          caption: {
            ko: '그림 2.2: Expo React Native 모바일 프로젝트 구조 생성',
            en: 'Figure 2.2: Expo React Native Mobile Project Initialization',
          },
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. ChatGPT로 App.js React Native 코드 작성',
          en: 'Step 2. Writing App.js Code with ChatGPT',
        },
        summary: {
          ko: '습관 트래킹 및 데이터 저장을 담당하는 전체 `App.js` 코드를 작성합니다.',
          en: 'Generate functional `App.js` containing habit progress list and local storage logic.',
        },
        contentMarkdown: {
          ko: `아래 코드는 ChatGPT에게 요청하여 생성받은 \`App.js\` 핵심 소스코드입니다.`,
          en: `Below is the functional \`App.js\` React Native code snippet generated via ChatGPT.`,
        },
        codeSnippet: {
          filename: 'App.js',
          language: 'javascript',
          code: `import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-asyncstorage/asyncstorage';

export default function App() {
  const [habits, setHabits] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      const saved = await AsyncStorage.getItem('user_habits');
      if (saved) setHabits(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  };

  const saveHabits = async (newHabits) => {
    try {
      await AsyncStorage.setItem('user_habits', JSON.stringify(newHabits));
    } catch (e) {
      console.error(e);
    }
  };

  const addHabit = () => {
    if (!inputText.trim()) return;
    const newHabits = [...habits, { id: Date.now().toString(), title: inputText, completed: false }];
    setHabits(newHabits);
    saveHabits(newHabits);
    setInputText('');
  };

  const toggleHabit = (id) => {
    const newHabits = habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h);
    setHabits(newHabits);
    saveHabits(newHabits);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>🔥 습관 트래커 & Daily Habit</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="새로운 매일의 습관 입력..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addHabit}>
          <Text style={styles.addButtonText}>추가</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={habits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.habitCard, item.completed && styles.completedCard]} 
            onPress={() => toggleHabit(item.id)}
          >
            <Text style={[styles.habitText, item.completed && styles.completedText]}>
              {item.completed ? '✅ ' : '⭕ '} {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingHorizontal: 20, paddingTop: 50 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#f8fafc', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, backgroundColor: '#1e293b', color: '#fff', borderRadius: 10, paddingHorizontal: 15, height: 50 },
  addButton: { backgroundColor: '#10b981', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, borderRadius: 10, marginLeft: 10 },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  habitCard: { backgroundColor: '#1e293b', padding: 18, borderRadius: 12, marginBottom: 10 },
  completedCard: { backgroundColor: '#064e3b' },
  habitText: { color: '#f8fafc', fontSize: 16 },
  completedText: { textDecorationLine: 'line-through', color: '#a7f3d0' }
});`,
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. Expo Go QR 코드 스캔 및 모바일 실시간 테스트',
          en: 'Step 3. Scanning Terminal QR Code with Expo Go App',
        },
        summary: {
          ko: '터미널에 뜬 QR 코드를 스마트폰 카메라로 스캔하여 실시간 모바일 테스트를 진행합니다.',
          en: 'Scan the generated terminal QR code with your phone camera to test live on mobile device.',
        },
        contentMarkdown: {
          ko: `1. 터미널에서 \`npx expo start\` 명령어 실행
2. 터미널에 커다란 QR 코드가 생성됨
3. iOS(카메라 앱) 또는 Android(Expo Go 앱)에서 QR 코드를 스캔
4. 스마트폰 화면에 즉시 모바일 앱이 실행되며 터치 반응 및 데이터 저장 테스트 수행!`,
          en: `Run \`npx expo start\` in terminal, open camera app on phone, scan the QR code, and watch your mobile app boot instantly!`,
        },
        screenshotSpec: {
          title: {
            ko: 'Expo QR 코드 터미널 화면 및 스마트폰 구동 화면',
            en: 'Expo Terminal QR Code & Mobile Smartphone Preview',
          },
          description: {
            ko: '좌측 터미널 QR 코드 화면과 우측 아이폰에서 구동되는 습관 트래커 앱 비교 스크린샷',
            en: 'Split screenshot showing terminal QR code on left and live mobile app running on smartphone on right',
          },
          mockType: 'mobile',
          caption: {
            ko: '그림 2.3: 스마트폰 Expo Go 실시간 단말기 연동 테스트',
            en: 'Figure 2.3: Real-Time Mobile Device Testing via Expo Go QR Scan',
          },
        },
      },
    ],
  },

  // 2.3 윈도우 데스크톱 앱 개발 (Python)
  {
    id: '2.3',
    partId: 'part-2',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 2. ChatGPT Vibe Coding Master Class',
    },
    title: {
      ko: '2.3 윈도우 데스크톱 앱 개발 (Python)',
      en: '2.3 Windows Desktop App Dev (Python & PyQt6)',
    },
    subtitle: {
      ko: 'PyQt6 기반 패스워드 생성기 프로그램 개발 및 PyInstaller .exe 파일 빌드',
      en: 'Build PyQt6 Random Password Vault app & compile into standalone Windows .exe file',
    },
    description: {
      ko: 'Python의 GUI 라이브러리인 PyQt6와 ChatGPT를 활용하여 비밀번호 생성기 데스크톱 프로그램을 개발하고, PyInstaller로 실행 가능한 `.exe` 바이너리 파일을 추출합니다.',
      en: 'Develop a desktop GUI password vault in Python PyQt6 using ChatGPT and bundle it into a portable Windows executable (.exe).',
    },
    iconName: 'Monitor',
    estimatedMinutes: 30,
    techStack: ['Python 3.11+', 'PyQt6', 'PyInstaller', 'Windows GUI .exe'],
    learningGoals: {
      ko: [
        '슬라이더, 특수문자 체크박스, 클립보드 복사 기능이 포함된 PyQt6 GUI 요구사항 설계',
        'ChatGPT가 생성한 `main.py` 그래픽 UI 코드 실행 및 이벤트 시그널 핸들링 검증',
        '`pyinstaller --noconsole --onefile main.py` 명령어로 단일 `.exe` 추출',
      ],
      en: [
        'Design PyQt6 GUI controls: length sliders, special char toggles, and clipboard actions',
        'Execute ChatGPT generated `main.py` and handle event signals properly',
        'Compile portable standalone `.exe` binaries using PyInstaller CLI',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. UI 요구사항 설계 및 프롬프트 정의',
          en: 'Step 1. Designing UI Requirements & Prompt Definition',
        },
        summary: {
          ko: '데스크톱 앱의 입력 컨트롤과 버튼 이벤트를 요구사항에 명시합니다.',
          en: 'Define desktop app slider controls, checkboxes, and clipboard button events.',
        },
        contentMarkdown: {
          ko: `파이썬 GUI 개발 시 PyQt6 사용을 지정하고 깔끔한 다크 테마 QSS 스타일시트를 포함하도록 지시합니다.`,
          en: `Specify PyQt6 GUI framework and request a clean QSS dark theme stylesheet.`,
        },
        promptCard: {
          title: {
            ko: 'PyQt6 패스워드Vault 데스크톱 앱 프롬프트',
            en: 'PyQt6 Password Vault Desktop App Prompt',
          },
          promptText: {
            ko: 'Python 3와 PyQt6를 사용하여 깔끔한 다크 테마의 "랜덤 패스워드 생성기 & Vault" 데스크톱 프로그램 전체 코드(`main.py`)를 작성해줘.\n\n[기능]\n1. 패스워드 길이 설정 슬라이더 (8~32자)\n2. 특수문자/숫자 포함 여부 QCheckBox 2개\n3. [생성하기] 버튼 클릭 시 무작위 패스워드 생성 및 QLineEdit 표기\n4. [클립보드 복사] 버튼 및 QClipboard 연동\n5. 세련된 모던 다크 QSS 스타일시트 적용',
            en: 'Write complete Python PyQt6 GUI code (`main.py`) for a "Random Password Generator & Vault". Include length slider (8-32), special char checkboxes, generate button, clipboard copying, and dark mode QSS styling.',
          },
          explanation: {
            ko: 'Qt 이벤트 시그널 슬롯 구조를 활용하여 안전하고 미려한 데스크톱 UI를 구현합니다.',
            en: 'Leverages Qt signal/slot architecture to deliver a smooth desktop UI.',
          },
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. main.py PyQt6 GUI 코드 작성 및 실행',
          en: 'Step 2. Writing and Running `main.py` PyQt6 Code',
        },
        summary: {
          ko: '작성된 PyQt6 파이썬 소스코드를 실행하여 창이 정상 노출되는지 검증합니다.',
          en: 'Run the PyQt6 Python script locally to confirm desktop window rendering.',
        },
        contentMarkdown: {
          ko: `터미널에서 \`pip install PyQt6\` 설치 후 \`python main.py\` 명령어로 실행합니다.`,
          en: `Install PyQt6 via \`pip install PyQt6\` and launch the application with \`python main.py\`.`,
        },
        codeSnippet: {
          filename: 'main.py',
          language: 'python',
          code: `import sys
import random
import string
from PyQt6.QtWidgets import (QApplication, QWidget, QVBoxLayout, QHBoxLayout, 
                             QLabel, QSlider, QCheckBox, QPushButton, QLineEdit)
from PyQt6.QtCore import Qt

class PasswordGeneratorApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle('🔒 Vibe Password Vault')
        self.resize(400, 320)
        self.setStyleSheet("""
            QWidget { background-color: #0f172a; color: #f8fafc; font-family: 'Segoe UI', sans-serif; }
            QLabel { font-size: 14px; }
            QPushButton { background-color: #10b981; color: white; font-weight: bold; border-radius: 8px; padding: 12px; }
            QPushButton:hover { background-color: #059669; }
            QLineEdit { background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; padding: 10px; color: #38bdf8; font-size: 16px; }
        """)

        layout = QVBoxLayout()

        self.resultInput = QLineEdit()
        self.resultInput.setPlaceholderText("생성된 패스워드...")
        layout.addWidget(self.resultInput)

        self.lengthLabel = QLabel("패스워드 길이: 16 자")
        layout.addWidget(self.lengthLabel)

        self.slider = QSlider(Qt.Orientation.Horizontal)
        self.slider.setRange(8, 32)
        self.slider.setValue(16)
        self.slider.valueChanged.connect(self.updateLength)
        layout.addWidget(self.slider)

        self.specialCheck = QCheckBox("특수문자 (!@#$%^&*) 포함")
        self.specialCheck.setChecked(True)
        layout.addWidget(self.specialCheck)

        self.generateBtn = QPushButton("⚡ 새로운 패스워드 생성")
        self.generateBtn.clicked.connect(self.generatePassword)
        layout.addWidget(self.generateBtn)

        self.copyBtn = QPushButton("📋 클립보드로 복사")
        self.copyBtn.clicked.connect(self.copyToClipboard)
        layout.addWidget(self.copyBtn)

        self.setLayout(layout)

    def updateLength(self, val):
        self.lengthLabel.setText(f"패스워드 길이: {val} 자")

    def generatePassword(self):
        length = self.slider.value()
        chars = string.ascii_letters + string.digits
        if self.specialCheck.isChecked():
            chars += "!@#$%^&*()_+"
        pwd = ''.join(random.choice(chars) for _ in range(length))
        self.resultInput.setText(pwd)

    def copyToClipboard(self):
        app = QApplication.instance()
        app.clipboard().setText(self.resultInput.text())

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = PasswordGeneratorApp()
    ex.show()
    sys.exit(app.exec())`,
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. PyInstaller 명령어로 .exe 실행 파일 추출',
          en: 'Step 3. Compiling Portable Windows Executable (.exe) via PyInstaller',
        },
        summary: {
          ko: '파이썬이 설치되지 않은 다른 PC에서도 동작하는 독립 실행형 .exe 파일로 빌드합니다.',
          en: 'Bundle app into a standalone .exe file that runs on any Windows PC without Python installed.',
        },
        contentMarkdown: {
          ko: `터미널에서 아래 명령어를 실행하면 콘솔 창 없이 실행되는 단일 \`PasswordVault.exe\` 파일이 \`/dist\` 디렉토리에 추출됩니다.

\`\`\`bash
pip install pyinstaller
pyinstaller --noconsole --onefile --name="PasswordVault" main.py
\`\`\``,
          en: `Run PyInstaller with \`--noconsole\` and \`--onefile\` flags to extract your portable executable.`,
        },
        screenshotSpec: {
          title: {
            ko: 'PyQt6 파이썬 GUI 실행 창 및 .exe 빌드 완료 화면',
            en: 'PyQt6 Desktop Window & Executable Build Output View',
          },
          description: {
            ko: '실행된 PyQt6 앱 화면과 Windows Explorer의 dist 디렉토리에 생성된 .exe 파일 스크린샷',
            en: 'Screenshot showing PyQt6 GUI desktop app window and standalone PasswordVault.exe file in explorer',
          },
          mockType: 'pyqt',
          caption: {
            ko: '그림 2.4: PyQt6 윈도우 데스크톱 프로그램 및 .exe 바이너리',
            en: 'Figure 2.4: Standalone PyQt6 Windows Desktop Application & .exe Binary',
          },
        },
      },
    ],
  },

  // 2.4 윈도우 데스크톱 앱 개발 (Rust)
  {
    id: '2.4',
    partId: 'part-2',
    partTitle: {
      ko: 'Part 1. ChatGPT 기능 & 연동 마스터',
      en: 'Part 2. ChatGPT Vibe Coding Master Class',
    },
    title: {
      ko: '2.4 윈도우 데스크톱 앱 개발 (Rust)',
      en: '2.4 Windows Desktop App Dev (Rust & Eframe)',
    },
    subtitle: {
      ko: 'Rust Eframe/Egui 및 sysinfo 크레이트 기반 실시간 시스템 모니터 빌드',
      en: 'Build high-performance real-time CPU/Memory system monitor using Rust, Eframe & sysinfo',
    },
    description: {
      ko: '고성능 시스템 언어인 Rust와 Eframe/Egui GUI 크레이트를 활용하여 CPU/메모리 사용량을 실시간으로 감시하는 고성능 데스크톱 앱을 개발하고 `cargo build --release`로 컴파일합니다.',
      en: 'Master Rust Vibe Coding: Create a lightweight real-time CPU/Memory monitor with Eframe/Egui and compile optimized native release binaries.',
    },
    iconName: 'Cpu',
    estimatedMinutes: 35,
    techStack: ['Rust 1.80+', 'Eframe / Egui', 'sysinfo crate', 'Cargo Release Build'],
    learningGoals: {
      ko: [
        'Cargo.toml에 `eframe` 및 `sysinfo` 크레이트 의존성 추가',
        'ChatGPT로 초당 CPU/메모리 사용률을 측정하여 게이지바 형태로 렌더링하는 Rust 코드 생성',
        '`cargo build --release` 명령어로 최적화된 경량 `.exe` 바이너리 빌드',
      ],
      en: [
        'Configure `Cargo.toml` dependencies with `eframe` and `sysinfo` crates',
        'Prompt Rust code rendering real-time CPU usage gauges and memory progress bars',
        'Execute `cargo build --release` to produce a fast, small native executable',
      ],
    },
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: {
          ko: 'Step 1. Rust 프로젝트 생성 및 Cargo.toml 의존성 설정',
          en: 'Step 1. Initializing Rust Project & Configuring Cargo.toml',
        },
        summary: {
          ko: '`cargo new sys_monitor` 명령어 실행 및 라이브러리를 추가합니다.',
          en: 'Create a new Rust binary crate and configure required GUI & system crates.',
        },
        contentMarkdown: {
          ko: `터미널에서 러스트 프로젝트를 생성하고 \`Cargo.toml\`에 의존성을 설정합니다.`,
          en: `Initialize crate via \`cargo new sys_monitor\` and configure \`Cargo.toml\` as shown below.`,
        },
        codeSnippet: {
          filename: 'Cargo.toml',
          language: 'toml',
          code: `[package]
name = "sys_monitor"
version = "0.1.0"
edition = "2021"

[dependencies]
eframe = "0.27.0"
sysinfo = "0.30.0"`,
        },
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: {
          ko: 'Step 2. ChatGPT로 Rust Eframe 시스템 모니터링 코드 작성',
          en: 'Step 2. Writing Rust Eframe System Monitor Code with ChatGPT',
        },
        summary: {
          ko: '실시간 자원 사용률을 수집하고 UI를 갱신하는 Rust 소스코드를 구현합니다.',
          en: 'Implement Rust code updating CPU usage every second using immediate mode GUI.',
        },
        contentMarkdown: {
          ko: `아래 코드는 \`src/main.rs\`에 작성되는 핵심 러스트 코드입니다.`,
          en: `Below is the functional Rust code snippet for \`src/main.rs\`.`,
        },
        codeSnippet: {
          filename: 'src/main.rs',
          language: 'rust',
          code: `use eframe::egui;
use sysinfo::System;

fn main() -> Result<(), eframe::Error> {
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default().with_inner_size([420.0, 300.0]),
        ..Default::default()
    };
    eframe::run_native(
        "⚡ Rust System Monitor",
        options,
        Box::new(|_cc| Box::new(SysMonitorApp::default())),
    )
}

struct SysMonitorApp {
    sys: System,
    cpu_usage: f32,
    ram_used_gb: f32,
    ram_total_gb: f32,
}

impl Default for SysMonitorApp {
    fn default() -> Self {
        let mut sys = System::new_all();
        sys.refresh_all();
        Self {
            sys,
            cpu_usage: 0.0,
            ram_used_gb: 0.0,
            ram_total_gb: 16.0,
        }
    }
}

impl eframe::App for SysMonitorApp {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        // 실시간 정보 갱신
        self.sys.refresh_cpu();
        self.sys.refresh_memory();

        self.cpu_usage = self.sys.global_cpu_info().cpu_usage();
        self.ram_used_gb = self.sys.used_memory() as f32 / 1024.0 / 1024.0 / 1024.0;
        self.ram_total_gb = self.sys.total_memory() as f32 / 1024.0 / 1024.0 / 1024.0;

        egui::CentralPanel::default().show(ctx, |ui| {
            ui.heading("⚡ Rust Real-Time System Monitor");
            ui.add_space(10.0);

            ui.label(format!("CPU 전체 사용률: {:.1}%", self.cpu_usage));
            ui.add(egui::ProgressBar::new(self.cpu_usage / 100.0).show_percentage());

            ui.add_space(15.0);

            let ram_percent = (self.ram_used_gb / self.ram_total_gb) * 100.0;
            ui.label(format!("RAM 메모리 사용량: {:.2} GB / {:.2} GB", self.ram_used_gb, self.ram_total_gb));
            ui.add(egui::ProgressBar::new(ram_percent / 100.0).text(format!("{:.1}%", ram_percent)));

            // 1초 주기로 자동 화면 갱신
            ctx.request_repaint_after(std::time::Duration::from_secs(1));
        });
    }
}`,
        },
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: {
          ko: 'Step 3. cargo build --release 최적화 빌드 및 실행',
          en: 'Step 3. Compiling Native Optimized Executable via `cargo build --release`',
        },
        summary: {
          ko: '릴리즈 모드로 최적화된 경량 Rust 바이너리를 빌드합니다.',
          en: 'Compile highly optimized release binary using cargo release profile.',
        },
        contentMarkdown: {
          ko: `터미널에서 \`cargo build --release\` 명령어를 실행하면 \`target/release/sys_monitor.exe\`에 아주 빠른 속도와 적은 메모리 점유율을 자랑하는 단일 윈도우 가벼운 실행 파일이 완성됩니다.`,
          en: `Run \`cargo build --release\` to extract high-performance release binary in \`target/release/\`.`,
        },
        screenshotSpec: {
          title: {
            ko: 'Rust Eframe GUI 실행 창 및 작업관리자 비교 화면',
            en: 'Rust Eframe Window & Windows Task Manager Comparison View',
          },
          description: {
            ko: 'Rust 실시간 모니터 앱과 Windows 작업관리자의 CPU/RAM 지표가 완벽하게 일치하는 스크린샷',
            en: 'Screenshot showing real-time Rust monitor GUI side-by-side with Windows Task Manager metrics',
          },
          mockType: 'rust',
          caption: {
            ko: '그림 2.5: Rust Eframe/Egui 실시간 CPU & RAM 시스템 모니터링',
            en: 'Figure 2.5: High Performance Native Rust Eframe/Egui System Monitor',
          },
        },
      },
    ],
  },
];
