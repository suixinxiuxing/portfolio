// Curated bilingual content from the user-provided September 2026 resume.
export const resumeProjects = [
  {
    "id": "project-0",
    "title": {
      "zh": "深海浮式结构非稳态运动演化机理及试验研究",
      "en": "Non-stationary motion of deep-sea floating structures"
    },
    "category": {
      "zh": "山东省自然科学基金",
      "en": "Shandong Provincial Natural Science Foundation"
    },
    "role": {
      "zh": "核心成员",
      "en": "Core member"
    },
    "period": "2025.01 — 2026.07",
    "summary": {
      "zh": "研究风、浪、流耦合作用下浮式结构的非线性、非稳态运动响应。",
      "en": "Studying nonlinear motion of floating structures under coupled wind, wave and current loading."
    },
    "details": {
      "zh": [
        "构建 VOF 与重叠网格模型，模拟六自由度运动和强非线性自由液面，完成多工况瞬态计算。",
        "提取压力、载荷与运动响应，分析共振状态下流场和结构运动的耦合关系，识别极端瞬态载荷。",
        "相关研究形成 ISOPE 论文2篇，以及 Communications Engineering、Physics of Fluids 期刊成果。"
      ],
      "en": [
        "Built VOF and overset-grid models for six-degree-of-freedom motion and transient free-surface flows.",
        "Extracted pressure, loads and motion responses to examine flow–structure coupling and extreme transient loads.",
        "Research contributed to two ISOPE papers and papers in Communications Engineering and Physics of Fluids."
      ]
    },
    "techs": [
      "VOF",
      "Overset mesh",
      "6DOF",
      "CFD",
      "STAR-CCM+"
    ],
    "images": []
  },
  {
    "id": "project-1",
    "title": {
      "zh": "无人机旋翼气动性能CFD-PINN预测与优化",
      "en": "UAV rotor aerodynamics with CFD–PINN"
    },
    "category": {
      "zh": "独立工程项目",
      "en": "Independent engineering project"
    },
    "role": {
      "zh": "独立开发",
      "en": "Independent developer"
    },
    "period": "2026.07 — 2026.08",
    "summary": {
      "zh": "结合高保真 CFD 数据与物理信息神经网络，开展旋翼气动性能快速预测。",
      "en": "Combining high-fidelity CFD data with physics-informed neural networks for rotor performance prediction."
    },
    "details": {
      "zh": [
        "基于 STAR-CCM+ 和 MRF 建立三维旋翼模型，提取推力、扭矩、压力场与尾流速度。",
        "使用 Python 构建 PINN 代理模型，将控制方程与边界条件嵌入损失函数，并与 CFD 结果交叉验证。",
        "形成“CFD 计算—参数提取—PINN 预测—参数优化”流程，支持多工况气动性能评估。"
      ],
      "en": [
        "Built 3D rotor models in STAR-CCM+ using MRF; extracted thrust, torque, pressure and wake velocity.",
        "Embedded governing equations and boundary conditions into a Python PINN surrogate and cross-validated predictions against CFD.",
        "Established a CFD-to-PINN workflow for multi-condition assessment and rotor parameter optimization."
      ]
    },
    "techs": [
      "STAR-CCM+",
      "MRF",
      "Python",
      "PINN"
    ],
    "images": []
  },
  {
    "id": "project-2",
    "title": {
      "zh": "大直径月池非线性特性研究",
      "en": "Nonlinear characteristics of large-diameter moonpools"
    },
    "category": {
      "zh": "海洋水动力研究",
      "en": "Offshore hydrodynamics"
    },
    "role": {
      "zh": "核心成员",
      "en": "Core member"
    },
    "period": "2026.06 — 2026.09",
    "summary": {
      "zh": "围绕圆筒型 FPSO—月池—系泊系统，研究复杂海况下的非线性耦合响应。",
      "en": "Evaluating the coupled response of a cylindrical FPSO, moonpool and mooring system."
    },
    "details": {
      "zh": [
        "构建高保真全耦合 CFD 模型，计算不同风、浪、流环境及结构参数工况。",
        "分析自由液面、压力载荷、六自由度运动与系泊张力，研究共振和流场演化。",
        "评估瞬态砰击及关键流动结构，为月池参数优化和系统安全设计提供依据。"
      ],
      "en": [
        "Built a fully coupled CFD model across environmental conditions and structural parameters.",
        "Analyzed free surfaces, pressure, six-degree-of-freedom motions and mooring tensions.",
        "Investigated resonance-induced slamming and flow structures to support safety assessment and design."
      ]
    },
    "techs": [
      "VOF",
      "Overset mesh",
      "6DOF",
      "CFD",
      "FEM",
      "STAR-CCM+"
    ],
    "images": []
  },
  {
    "id": "project-3",
    "title": {
      "zh": "高航速下三体船砰击载荷数据集（科研服务项目）",
      "en": "High-speed trimaran slamming-load dataset"
    },
    "category": {
      "zh": "科研服务项目",
      "en": "Research service project"
    },
    "role": {
      "zh": "核心成员",
      "en": "Core member"
    },
    "period": "2025.12 — 2026.07",
    "summary": {
      "zh": "构建多工况砰击载荷数据集，支撑高航速三体船载荷预测与结构评估。",
      "en": "Developing a multi-condition dataset for slamming-load prediction and structural safety assessment."
    },
    "details": {
      "zh": [
        "建立强非线性水动力模型，开展 CFD–FEA 双向耦合分析。",
        "针对航速、结构参数与环境条件开展批量计算，提取压力峰值、作用时间和空间分布。",
        "用 Python 自动处理5600组压力数据并开展多参数拟合，相关成果形成 OMAE 论文1篇。"
      ],
      "en": [
        "Modeled nonlinear trimaran hydrodynamics and two-way CFD–FEA coupling.",
        "Ran parameter studies over speed, geometry and environmental conditions.",
        "Automated feature extraction and fitting for 5,600 pressure datasets in Python; results contributed to an OMAE paper."
      ]
    },
    "techs": [
      "CFD",
      "FEA",
      "Python",
      "STAR-CCM+"
    ],
    "images": []
  },
  {
    "id": "project-4",
    "title": {
      "zh": "基于CFD-FEA协同的海洋工程结构双向耦合分析技术研究",
      "en": "Two-way CFD–FEA coupling for offshore structures"
    },
    "category": {
      "zh": "双向流固耦合",
      "en": "Fluid–structure interaction"
    },
    "role": {
      "zh": "核心成员",
      "en": "Core member"
    },
    "period": "2025.01 — 2026.07",
    "summary": {
      "zh": "研究瞬态流体载荷与结构响应的相互作用，支持海洋工程结构强度评估。",
      "en": "Analyzing the interaction between transient fluid loads and structural deformation."
    },
    "details": {
      "zh": [
        "参与构建流体域、结构域及耦合界面的高保真 CFD–FEA 分析框架。",
        "建立流体载荷与结构位移双向传递流程，结合动网格和瞬态求解。",
        "分析多工况压力、载荷、变形与应力响应，优化耦合参数及计算稳定性。"
      ],
      "en": [
        "Built fluid, structural and interface models for a two-way coupling framework.",
        "Established bidirectional transfer of fluid loads and structural displacement using moving meshes and transient solvers.",
        "Analyzed pressure, loads, deformation and stress across conditions, including coupling stability and parameter optimization."
      ]
    },
    "techs": [
      "VOF",
      "Overset mesh",
      "6DOF",
      "CFD",
      "FEM",
      "STAR-CCM+"
    ],
    "images": []
  },
  {
    "id": "project-5",
    "title": {
      "zh": "溯海行舟",
      "en": "Ocean Cleaner"
    },
    "category": {
      "zh": "清洁能源微塑料收集三体船",
      "en": "Clean-energy microplastic collection trimaran"
    },
    "role": {
      "zh": "副队长",
      "en": "Deputy lead"
    },
    "period": "2021.10 — 2023.06",
    "summary": {
      "zh": "围绕近海微塑料治理，设计船体平台、动力系统与流体收集装置。",
      "en": "Developing a clean-energy vessel and collection system for nearshore microplastic pollution."
    },
    "outcome": {
      "zh": "水泵引流效率提升 12%，船体阻力降低 7.6%。",
      "en": "Pump intake efficiency rose 12%; hull resistance fell 7.6%."
    },
    "imageAlt": {
      "zh": "带部件标注的海洋微塑料收集三体船设计图",
      "en": "Annotated design of the microplastic-collecting trimaran"
    },
    "details": {
      "zh": [
        "担任副队长，负责三体船水动力与收集装置设计，使用 STAR-CCM+ 开展 CFD 模拟。",
        "根据速度场、压力场和阻力结果迭代设计，水泵引流效率提升12%，船体阻力降低7.6%。",
        "参与申报和技术方案撰写，形成实用新型、外观设计专利各1项，获校级“挑战杯”三等奖。"
      ],
      "en": [
        "Designed the trimaran hydrodynamics and collection device using STAR-CCM+ CFD simulations.",
        "Iterated hull and intake parameters: pump intake efficiency increased by 12% and hull resistance decreased by 7.6%.",
        "Contributed to proposals and technology transfer; outputs included a utility-model patent, a design patent and a university Challenge Cup third prize."
      ]
    },
    "techs": [
      "STAR-CCM+",
      "CFD",
      "Hydrodynamics"
    ],
    "images": [
      "images/projects/溯海行舟/ocean-cleaner-main.png",
      "images/projects/溯海行舟/ocean-cleaner-1.png",
      "images/projects/溯海行舟/ocean-cleaner-2.png",
      "images/projects/溯海行舟/ocean-cleaner-3.jpg"
    ]
  },
  {
    "id": "project-6",
    "title": {
      "zh": "精卫听音",
      "en": "Ocean Ear"
    },
    "category": {
      "zh": "水下噪声监测与预警",
      "en": "Underwater noise monitoring and early warning"
    },
    "role": {
      "zh": "核心成员",
      "en": "Core member"
    },
    "period": "2022.03 — 2022.07",
    "summary": {
      "zh": "面向海洋施工噪声与生态保护，开展声学信号处理和预警阈值研究。",
      "en": "Processing underwater acoustic signals to support construction-noise monitoring and marine ecology."
    },
    "outcome": {
      "zh": "构建噪声预警阈值模型，项目获“互联网+”校级金奖。",
      "en": "Built noise-warning thresholds; the project won university Internet+ Gold."
    },
    "imageAlt": {
      "zh": "项目装置在水面测试的现场照片",
      "en": "Project device being tested on water"
    },
    "details": {
      "zh": [
        "用 Python 进行降噪、频谱分析和特征提取，分析不同施工工况的声学特征。",
        "参与构建噪声预警阈值模型，为海洋生态评估与工程监测提供数据支撑。",
        "参与技术调研、项目报告与商业化方案；项目年收入610万元，获“互联网+”校级金奖。"
      ],
      "en": [
        "Used Python for denoising, spectral analysis and acoustic feature extraction.",
        "Helped build noise-warning thresholds and link acoustic features to warning indicators.",
        "Contributed feasibility research, reporting and commercialization analysis; the project reported annual revenue of RMB 6.1 million and won university Internet+ Gold."
      ]
    },
    "techs": [
      "Python",
      "Signal processing",
      "Spectral analysis"
    ],
    "images": [
      "images/projects/精卫听音/ocean-ear-1.jpg",
      "images/projects/精卫听音/ocean-ear-2.png"
    ]
  }
] as const;
