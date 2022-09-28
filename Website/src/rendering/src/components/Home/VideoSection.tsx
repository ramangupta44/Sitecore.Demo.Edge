import { withDatasourceCheck, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';


export type VideoSectionProps = ComponentProps & {
  fields: {
    Heading: Field<string>;
    Description: Field<string>;
    VideoSrc: Field<string>;
  };
};

const VideoSection = (props: VideoSectionProps): JSX.Element => (
  <>
    <section className="section section--3-col">
      <div className="section__content section--3-col__content container">
        <h2 className="section__content__title">{props.params.Heading}</h2>
        <p className="section__content__p">{props.params.Description}</p>
        <video width="320" height="240" controls>
          <source src={props.params.VideoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  </>
);

export default withDatasourceCheck()<VideoSectionProps>(VideoSection);
