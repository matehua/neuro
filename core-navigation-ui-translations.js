import fs from 'fs';

/**
 * Core Navigation & UI Translation Implementation
 * Translates all navigation, buttons, forms, and core UI elements
 */

console.log('🧭 CORE NAVIGATION & UI TRANSLATION IMPLEMENTATION');
console.log('='.repeat(60));

const coreUITranslations = {
  // Main navigation
  nav: {
    home: "首页",
    about: "关于我们",
    expertise: "专业领域",
    appointments: "预约",
    gpResources: "全科医生资源",
    locations: "诊所位置",
    contact: "联系我们",
    patientResources: "患者资源",
    locationsSubmenu: {
      surreyHills: "萨里山",
      mornington: "莫宁顿",
      frankston: "弗兰克斯顿",
      mooneePonds: "月亮池塘"
    },
    expertiseSubmenu: {
      brainSurgery: "脑部手术",
      spinalSurgery: "脊柱手术",
      nerveSurgery: "神经手术",
      painManagement: "疼痛管理"
    },
    patientResourcesSubmenu: {
      preOperative: "术前准备",
      postOperative: "术后护理",
      education: "患者教育",
      support: "患者支持"
    }
  },

  // Hero section
  hero: {
    subtitle: "专业神经外科护理",
    title: "先进的神经外科解决方案",
    description: "在miNEURO，我们提供全面的神经外科护理，专注于脑部、脊柱和神经系统疾病。我们的专家团队致力于为每位患者提供个性化的治疗方案。",
    bookConsultation: "预约咨询",
    exploreTreatments: "探索治疗方案",
    scrollDown: "向下滚动",
    learnMore: "了解更多",
    getStarted: "开始咨询"
  },

  // Footer
  footer: {
    description: "miNEURO是一家领先的神经外科诊所，专门从事脑部、脊柱和神经系统疾病的治疗。我们致力于为患者提供最高质量的护理。",
    quickLinks: "快速链接",
    contact: "联系方式",
    followUs: "关注我们",
    allRights: "版权所有",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    sitemap: "网站地图"
  },

  // Common buttons and actions
  common: {
    // Actions
    book: "预约",
    schedule: "安排",
    contact: "联系",
    call: "致电",
    email: "邮件",
    submit: "提交",
    send: "发送",
    save: "保存",
    cancel: "取消",
    confirm: "确认",
    edit: "编辑",
    delete: "删除",
    update: "更新",
    create: "创建",
    add: "添加",
    remove: "移除",
    back: "返回",
    next: "下一步",
    previous: "上一步",
    continue: "继续",
    finish: "完成",
    close: "关闭",
    open: "打开",
    view: "查看",
    download: "下载",
    upload: "上传",
    print: "打印",
    share: "分享",
    copy: "复制",
    search: "搜索",
    filter: "筛选",
    sort: "排序",
    reset: "重置",
    clear: "清除",
    refresh: "刷新",
    reload: "重新加载",

    // Status and feedback
    loading: "加载中...",
    saving: "保存中...",
    processing: "处理中...",
    success: "成功",
    error: "错误",
    warning: "警告",
    info: "信息",
    completed: "已完成",
    pending: "待处理",
    cancelled: "已取消",
    failed: "失败",
    retry: "重试",

    // Navigation
    home: "首页",
    menu: "菜单",
    navigation: "导航",
    breadcrumb: "面包屑导航",
    pagination: "分页",
    firstPage: "首页",
    lastPage: "末页",
    nextPage: "下一页",
    previousPage: "上一页",

    // Content
    readMore: "阅读更多",
    readLess: "收起",
    showMore: "显示更多",
    showLess: "显示更少",
    viewAll: "查看全部",
    viewDetails: "查看详情",
    learnMore: "了解更多",
    moreInfo: "更多信息",
    expand: "展开",
    collapse: "折叠",

    // Time and dates
    today: "今天",
    yesterday: "昨天",
    tomorrow: "明天",
    thisWeek: "本周",
    thisMonth: "本月",
    thisYear: "今年",
    date: "日期",
    time: "时间",
    duration: "持续时间",
    schedule: "时间表",

    // Validation and forms
    required: "必填项",
    optional: "可选",
    invalid: "无效",
    valid: "有效",
    pleaseSelect: "请选择",
    pleaseEnter: "请输入",
    pleaseChoose: "请选择",
    selectOption: "选择选项",
    enterText: "输入文本",
    chooseFile: "选择文件",

    // General terms
    yes: "是",
    no: "否",
    ok: "好的",
    maybe: "可能",
    unknown: "未知",
    none: "无",
    all: "全部",
    any: "任何",
    other: "其他",
    new: "新建",
    old: "旧的",
    current: "当前",
    default: "默认",
    custom: "自定义",
    automatic: "自动",
    manual: "手动"
  },

  // Forms and inputs
  forms: {
    // Personal information
    firstName: "名字",
    lastName: "姓氏",
    fullName: "全名",
    name: "姓名",
    title: "称谓",
    gender: "性别",
    dateOfBirth: "出生日期",
    age: "年龄",
    
    // Contact information
    email: "邮箱地址",
    emailAddress: "邮箱地址",
    phone: "电话号码",
    phoneNumber: "电话号码",
    mobile: "手机号码",
    address: "地址",
    streetAddress: "街道地址",
    city: "城市",
    state: "州",
    postcode: "邮编",
    country: "国家",
    
    // Medical information
    medicalHistory: "病史",
    currentMedications: "当前用药",
    allergies: "过敏史",
    symptoms: "症状",
    chiefComplaint: "主诉",
    referringDoctor: "转诊医生",
    insuranceProvider: "保险公司",
    insuranceNumber: "保险号码",
    
    // Appointment information
    appointmentDate: "预约日期",
    appointmentTime: "预约时间",
    preferredDate: "首选日期",
    preferredTime: "首选时间",
    appointmentType: "预约类型",
    consultationType: "咨询类型",
    urgency: "紧急程度",
    reason: "原因",
    
    // Communication
    message: "留言",
    comments: "备注",
    notes: "注释",
    subject: "主题",
    description: "描述",
    details: "详情",
    
    // Form actions
    submit: "提交",
    reset: "重置",
    save: "保存",
    cancel: "取消",
    next: "下一步",
    previous: "上一步",
    
    // Validation messages
    required: "此字段为必填项",
    invalidEmail: "请输入有效的邮箱地址",
    invalidPhone: "请输入有效的电话号码",
    invalidDate: "请输入有效的日期",
    tooShort: "输入内容太短",
    tooLong: "输入内容太长",
    
    // Placeholders
    enterEmail: "请输入邮箱地址",
    enterPhone: "请输入电话号码",
    enterName: "请输入姓名",
    enterMessage: "请输入留言",
    selectDate: "选择日期",
    selectTime: "选择时间",
    selectOption: "请选择选项"
  },

  // Appointments
  appointments: {
    title: "预约咨询",
    subtitle: "安排您的神经外科咨询",
    description1: "我们的专家团队随时为您提供专业的神经外科咨询服务。",
    description2: "请填写以下信息以安排您的预约。",
    bookAppointment: "预约咨询",
    scheduleConsultation: "安排咨询",
    checkAvailability: "检查可用性",
    confirmAppointment: "确认预约",
    appointmentConfirmed: "预约已确认",
    appointmentPending: "预约待确认",
    rescheduleAppointment: "重新安排预约",
    cancelAppointment: "取消预约",
    
    process: {
      title: "预约流程",
      subtitle: "简单的三步预约流程",
      steps: {
        initialConsultation: {
          title: "初次咨询",
          description: "与我们的专家进行详细的初次咨询，讨论您的症状和病史。"
        },
        investigations: {
          title: "检查评估",
          description: "根据需要进行相关的医学检查和影像学评估。"
        },
        treatmentPlan: {
          title: "治疗方案",
          description: "制定个性化的治疗方案，包括手术或非手术选择。"
        }
      }
    },
    
    types: {
      initialConsultation: "初次咨询",
      followUp: "复诊",
      secondOpinion: "第二意见",
      preOperative: "术前咨询",
      postOperative: "术后随访",
      emergency: "紧急咨询"
    },
    
    urgency: {
      routine: "常规",
      urgent: "紧急",
      semiUrgent: "半紧急",
      emergency: "急诊"
    }
  },

  // Contact
  contact: {
    title: "联系我们",
    subtitle: "我们随时为您提供帮助",
    description: "如有任何问题或需要预约，请随时联系我们的团队。",
    getInTouch: "联系我们",
    contactInfo: "联系信息",
    officeHours: "办公时间",
    receptionHours: "接待时间",
    emergencyContact: "紧急联系",
    sendMessage: "发送消息",
    contactForm: "联系表单",
    
    // Contact details
    phone: "电话",
    email: "邮箱",
    address: "地址",
    fax: "传真",
    website: "网站",
    
    // Form fields
    fullName: "全名",
    phoneNumber: "电话号码",
    emailAddress: "邮箱地址",
    subject: "主题",
    message: "留言内容",
    howCanWeHelp: "我们如何为您提供帮助？",
    send: "发送",
    
    // Office hours
    mondayToFriday: "周一至周五",
    saturday: "周六",
    sunday: "周日",
    closed: "休息",
    
    // Emergency
    emergency: "紧急情况",
    emergencyInstructions: "如遇紧急情况，请立即拨打000或前往最近的急诊科。",
    
    // Directions
    getDirections: "获取路线",
    parking: "停车信息",
    publicTransport: "公共交通"
  }
};

/**
 * Load existing Chinese translations
 */
function loadExistingTranslations() {
  try {
    const content = fs.readFileSync('src/locales/zh.ts', 'utf8');
    const objectContent = content
      .replace(/export default\s*/, '')
      .replace(/;\s*$/, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    
    return eval(`(${objectContent})`);
  } catch (error) {
    console.error('❌ Failed to load existing translations:', error.message);
    return {};
  }
}

/**
 * Merge translations recursively
 */
function mergeTranslations(existing, newTranslations) {
  const result = JSON.parse(JSON.stringify(existing)); // Deep clone
  
  function merge(target, source) {
    for (const [key, value] of Object.entries(source)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        if (typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
          merge(target[key], value);
        } else {
          target[key] = value;
        }
      } else {
        target[key] = value;
      }
    }
  }
  
  merge(result, newTranslations);
  return result;
}

/**
 * Convert object to formatted TypeScript string
 */
function objectToTypeScript(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let result = '{\n';
  
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    const isLast = i === entries.length - 1;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result += `${spaces}  ${key}: ${objectToTypeScript(value, indent + 1)}${isLast ? '' : ','}\n`;
    } else if (Array.isArray(value)) {
      result += `${spaces}  ${key}: ${JSON.stringify(value)}${isLast ? '' : ','}\n`;
    } else {
      const escapedValue = typeof value === 'string' ? value.replace(/"/g, '\\"') : value;
      result += `${spaces}  ${key}: "${escapedValue}"${isLast ? '' : ','}\n`;
    }
  }
  
  result += `${spaces}}`;
  return result;
}

// Main implementation
console.log('📖 Loading existing translations...');
const existingTranslations = loadExistingTranslations();

console.log('🔄 Merging core UI translations...');
const mergedTranslations = mergeTranslations(existingTranslations, coreUITranslations);

console.log('💾 Writing updated Chinese translations...');
const newContent = `export default ${objectToTypeScript(mergedTranslations)};\n`;

// Backup existing file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.writeFileSync(`src/locales/zh.ts.backup-${timestamp}`, fs.readFileSync('src/locales/zh.ts', 'utf8'));

// Write new translations
fs.writeFileSync('src/locales/zh.ts', newContent, 'utf8');

console.log('✅ Core navigation and UI translations implemented!');
console.log(`📊 Added comprehensive UI translation structure`);
console.log(`🔒 Backup saved to: src/locales/zh.ts.backup-${timestamp}`);

// Count added translations
const addedCount = Object.values(coreUITranslations)
  .reduce((total, category) => {
    if (typeof category === 'object' && category !== null) {
      return total + countNestedKeys(category);
    }
    return total + 1;
  }, 0);

console.log(`📈 Added ${addedCount} core UI translations`);

function countNestedKeys(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      count += countNestedKeys(value);
    } else {
      count += 1;
    }
  }
  return count;
}
