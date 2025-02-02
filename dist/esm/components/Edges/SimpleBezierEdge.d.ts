/// <reference types="react" />
import { Position } from '@xyflow/system';
import type { SimpleBezierEdgeProps } from '../../types';
export interface GetSimpleBezierPathParams {
    sourceX: number;
    sourceY: number;
    sourcePosition?: Position;
    targetX: number;
    targetY: number;
    targetPosition?: Position;
}
export declare function getSimpleBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, }: GetSimpleBezierPathParams): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number];
declare const SimpleBezierEdge: import("react").MemoExoticComponent<({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth, }: SimpleBezierEdgeProps) => import("react/jsx-runtime").JSX.Element>;
declare const SimpleBezierEdgeInternal: import("react").MemoExoticComponent<({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth, }: SimpleBezierEdgeProps) => import("react/jsx-runtime").JSX.Element>;
export { SimpleBezierEdge, SimpleBezierEdgeInternal };
//# sourceMappingURL=SimpleBezierEdge.d.ts.map