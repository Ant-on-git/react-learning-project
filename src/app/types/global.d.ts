// глобальная декларация типов чтобы typescript не ругался на импорт из css modules

declare module "*.module.css";
declare module "*.module.scss";
// and so on for whatever flavor of css you're using


declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
