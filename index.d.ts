/*
 * Copyright 2023 Marek Kobida
 */

import type availableJsxAttributes from '@warden-sk/compiler/availableJsxAttributes';
import type { EncodedClassName } from '@warden-sk/compiler/helpers/decodeClassName';
import type { EncodedResponsiveClassName } from '@warden-sk/compiler/helpers/decodeResponsiveClassName';
import 'react';
import type React from 'react';

type A = typeof availableJsxAttributes;

type B = {
  [C in keyof A]?: EncodedResponsiveClassName<A[C][number]>;
};

declare global {
  type $<T> = EnhancedElementAttributes & Omit<T, keyof typeof availableJsxAttributes | 'className'>;
  type EnhancedElementAttributes = B & { className?: EncodedClassName };
  type EnhancedJSXElement<T extends keyof JSX.IntrinsicElements> = $<JSX.IntrinsicElements[T]>;
}

declare module 'react' {
  type GlobalJSXIntrinsicElements = {
    a: $<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
    abbr: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    address: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    animate: $<React.SVGProps<SVGElement>>;
    animateMotion: $<React.SVGProps<SVGElement>>;
    animateTransform: $<React.SVGProps<SVGElement>>;
    area: $<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>>;
    article: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    aside: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    audio: $<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>>;
    b: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    base: $<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>>;
    bdi: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    bdo: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    big: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    blockquote: $<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    body: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>>;
    br: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>>;
    button: $<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
    canvas: $<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>>;
    caption: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    center: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    circle: $<React.SVGProps<SVGCircleElement>>;
    cite: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    clipPath: $<React.SVGProps<SVGClipPathElement>>;
    code: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    col: $<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
    colgroup: $<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
    data: $<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>>;
    datalist: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>>;
    dd: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    defs: $<React.SVGProps<SVGDefsElement>>;
    del: $<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>>;
    desc: $<React.SVGProps<SVGDescElement>>;
    details: $<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>>;
    dfn: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    dialog: $<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>>;
    div: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    dl: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>>;
    dt: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ellipse: $<React.SVGProps<SVGEllipseElement>>;
    em: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    embed: $<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>>;
    feBlend: $<React.SVGProps<SVGFEBlendElement>>;
    feColorMatrix: $<React.SVGProps<SVGFEColorMatrixElement>>;
    feComponentTransfer: $<React.SVGProps<SVGFEComponentTransferElement>>;
    feComposite: $<React.SVGProps<SVGFECompositeElement>>;
    feConvolveMatrix: $<React.SVGProps<SVGFEConvolveMatrixElement>>;
    feDiffuseLighting: $<React.SVGProps<SVGFEDiffuseLightingElement>>;
    feDisplacementMap: $<React.SVGProps<SVGFEDisplacementMapElement>>;
    feDistantLight: $<React.SVGProps<SVGFEDistantLightElement>>;
    feDropShadow: $<React.SVGProps<SVGFEDropShadowElement>>;
    feFlood: $<React.SVGProps<SVGFEFloodElement>>;
    feFuncA: $<React.SVGProps<SVGFEFuncAElement>>;
    feFuncB: $<React.SVGProps<SVGFEFuncBElement>>;
    feFuncG: $<React.SVGProps<SVGFEFuncGElement>>;
    feFuncR: $<React.SVGProps<SVGFEFuncRElement>>;
    feGaussianBlur: $<React.SVGProps<SVGFEGaussianBlurElement>>;
    feImage: $<React.SVGProps<SVGFEImageElement>>;
    feMerge: $<React.SVGProps<SVGFEMergeElement>>;
    feMergeNode: $<React.SVGProps<SVGFEMergeNodeElement>>;
    feMorphology: $<React.SVGProps<SVGFEMorphologyElement>>;
    feOffset: $<React.SVGProps<SVGFEOffsetElement>>;
    fePointLight: $<React.SVGProps<SVGFEPointLightElement>>;
    feSpecularLighting: $<React.SVGProps<SVGFESpecularLightingElement>>;
    feSpotLight: $<React.SVGProps<SVGFESpotLightElement>>;
    feTile: $<React.SVGProps<SVGFETileElement>>;
    feTurbulence: $<React.SVGProps<SVGFETurbulenceElement>>;
    fieldset: $<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>>;
    figcaption: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    figure: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    filter: $<React.SVGProps<SVGFilterElement>>;
    footer: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    foreignObject: $<React.SVGProps<SVGForeignObjectElement>>;
    form: $<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
    g: $<React.SVGProps<SVGGElement>>;
    h1: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h2: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h3: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h4: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h5: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h6: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    head: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>>;
    header: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    hgroup: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    hr: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>>;
    html: $<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>>;
    i: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    iframe: $<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>>;
    image: $<React.SVGProps<SVGImageElement>>;
    img: $<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
    input: $<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
    ins: $<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>>;
    kbd: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    keygen: $<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>>;
    label: $<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
    legend: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>>;
    li: $<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
    line: $<React.SVGLineElementAttributes<SVGLineElement>>;
    linearGradient: $<React.SVGProps<SVGLinearGradientElement>>;
    link: $<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>>;
    main: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    map: $<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>>;
    mark: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    marker: $<React.SVGProps<SVGMarkerElement>>;
    mask: $<React.SVGProps<SVGMaskElement>>;
    menu: $<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>>;
    menuitem: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    meta: $<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>>;
    metadata: $<React.SVGProps<SVGMetadataElement>>;
    meter: $<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>>;
    mpath: $<React.SVGProps<SVGElement>>;
    nav: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    noindex: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    noscript: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    object: $<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>>;
    ol: $<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>>;
    optgroup: $<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>>;
    option: $<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>;
    output: $<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>>;
    p: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;
    param: $<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>>;
    path: $<React.SVGProps<SVGPathElement>>;
    pattern: $<React.SVGProps<SVGPatternElement>>;
    picture: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    polygon: $<React.SVGProps<SVGPolygonElement>>;
    polyline: $<React.SVGProps<SVGPolylineElement>>;
    pre: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>>;
    progress: $<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>>;
    q: $<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    radialGradient: $<React.SVGProps<SVGRadialGradientElement>>;
    rect: $<React.SVGProps<SVGRectElement>>;
    rp: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    rt: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ruby: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    s: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    samp: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    script: $<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>>;
    search: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    section: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    select: $<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>;
    slot: $<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>>;
    small: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    source: $<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>>;
    span: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    stop: $<React.SVGProps<SVGStopElement>>;
    strong: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    style: $<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>>;
    sub: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    summary: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    sup: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    svg: $<React.SVGProps<SVGSVGElement>>;
    switch: $<React.SVGProps<SVGSwitchElement>>;
    symbol: $<React.SVGProps<SVGSymbolElement>>;
    table: $<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
    tbody: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    td: $<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>>;
    template: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>>;
    text: $<React.SVGTextElementAttributes<SVGTextElement>>;
    textPath: $<React.SVGProps<SVGTextPathElement>>;
    textarea: $<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
    tfoot: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    th: $<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>>;
    thead: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    time: $<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>>;
    title: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>>;
    tr: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>>;
    track: $<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>>;
    tspan: $<React.SVGProps<SVGTSpanElement>>;
    u: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ul: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
    use: $<React.SVGProps<SVGUseElement>>;
    var: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    video: $<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>>;
    view: $<React.SVGProps<SVGViewElement>>;
    wbr: $<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    webview: $<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>>;
  };
}
