import { withDatasourceCheck, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type VideoProps = ComponentProps & {
  fields: {
    Heading: Field<string>;
    Description: Field<string>;
    VideoSrc: Field<string>;
  };
};

const Video = (props: VideoProps): JSX.Element => (
  <>
  <section className="section section--3-col">
    <h2 className="section__content__title">{props.params.Heading}</h2>
    </section></>
);

export default withDatasourceCheck()<VideoProps>(Video);
