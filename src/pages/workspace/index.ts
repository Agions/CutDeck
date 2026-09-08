/**
 * Fablr Workspace — 专业视听剪辑工作台导出
 */
export { default as Workspace, WorkspaceStudioPage, WorkspacePage } from './index.tsx';
export { default } from './index.tsx';

// 兼容旧导出
export { default as ProjectSetup } from './edit-step/project-setup';
export { default as VideoUpload } from './edit-step/video-upload';
export { default as AIVisualizer } from './assemble/ai-visualizer';
export { default as ScriptWriting } from './edit-step/script-writing';
export { default as VideoComposing } from './assemble/video-composing';
export { default as ClipRippling } from './assemble/clip-rippling';
export { default as VideoExport } from './export/video-export';
export { default as StepList } from './edit-step/step-list';
export { Highlights, type Highlight, type HighlightsProps } from './assemble/highlights/highlights';

export type { AIFunctionType } from './shared/function-mode-map';

export * as editStep from './edit-step';
export * as assemble from './assemble';
export * as export_ from './export/video-export';
export * as shared from './shared';
