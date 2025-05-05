export const COLORS={
    darkGray:'#bdc3c7',
    primaryBlue:'#273c75',
    textColor:'#f5f6fa',
    orange:'#e67e22'
} as const;

export type ColorTypes = keyof typeof COLORS;