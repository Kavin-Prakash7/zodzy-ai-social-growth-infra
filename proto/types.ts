export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
  publishDate: string;
  publishTimestamp?: Date;
  visibility: 'Public' | 'Private' | 'Unlisted';
  monetization: 'On' | 'Off' | 'Limited';
  restrictions: 'None' | 'Copyright' | 'Age';
  avgViewDuration: string;
  durationSeconds: number; // Added for duration analysis
  
  // Calculated Metrics
  outlierScore: number; // Video Views / Channel Avg Views
  engagementRate: number; // (likes + comments) / views * 100
  contentValueScore: number; // (viewCount * likeRatio * commentRatio) / videoAgeInDays
  valueRating: 'High Impact' | 'Medium' | 'Low';
  status: 'Breakout' | 'Healthy' | 'Underperforming';
  
  // AI Derived
  sentiment: 'Positive' | 'Neutral' | 'Mixed';
  titleScore?: number;
  titleBetterVariant?: string;
  aiInsights?: string; // Narrative "why it worked"
}

export interface ContentFormatStats {
    type: 'Shorts' | 'Long-form';
    count: number;
    avgViews: number;
    avgEngagement: number;
}

export interface TitlePattern {
    pattern: string;
    avgPerformance: string; // e.g., "+37%"
    examples: string[];
}

export interface AiContentRecommendation {
    type: 'Sequel' | 'New Idea' | 'Rewrite';
    title: string;
    reason: string;
}

export interface ChannelStats {
  subscribers: number;
  subscribersChange: number;
  views28d: number;
  viewsChange: number;
  revenue28d: number;
  revenueChange: number;
  
  // Advanced Metrics
  avgEngagementRate: number;
  avgOutlierScore: number;
  avgContentValueScore: number;
  uploadConsistency: 'Consistent' | 'Irregular' | 'Frequent';
  aiTopPerformerReason?: string;
  
  // Format Breakdown
  bestFormat?: 'Shorts' | 'Long-form' | 'Balanced';
  formatStats?: ContentFormatStats[];
  
  sentimentIndex: number;
  channelTitle?: string;
  channelUrl?: string;
  channelThumbnail?: string;
  bestUploadDay?: string;
  bestUploadHour?: string;
}

export interface AnalyticsDataPoint {
  date: string;
  views: number;
  likes: number;
  comments: number;
}

export interface StrategyAction {
    type: 'start' | 'stop' | 'continue';
    title: string;
    description: string;
    impact: 'High' | 'Medium' | 'Low';
}

export interface MarketInsight {
    trend: string;
    opportunity: string;
    competitorGap: string;
}

export interface VideoAnalysis {
  title: string;
  channelName: string;
  channelUrl: string;
  viewCount: number;
  likes: number;
  numberOfSubscribers: number;
  duration: string;
  description: string;
  publishDate: string;
  videoUrl: string;
  rawSubtitles: string;
  cleanedTranscript: string;
}

export interface IntelligenceData {
    titlePatterns: TitlePattern[];
    recommendations: AiContentRecommendation[];
}