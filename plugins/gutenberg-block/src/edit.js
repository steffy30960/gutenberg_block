/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary attributes like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockattributes
 */
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls
} from '@wordpress/block-editor';
import { ToolbarGroup,ToolbarButton } from '@wordpress/components';
import { Fragment } from '@wordpress/element'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(attributes) {
	const {
		attributes: { content, align, type },
		setAttributes,
	} = attributes;

	const blockattributes = useBlockProps();

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}
	const onChangeAlign = ( newAlign ) => {
		setAttributes( {
			align: newAlign === undefined ? 'none' : newAlign,
		} )
	}
	const onChangeType = (newType) => {
		setAttributes({type : newType });
	};
	return (
		<>
			<Fragment>
				<BlockControls>
					<AlignmentControl
						value={ attributes.align }
						onChange={ onChangeAlign }
					/>
					<ToolbarGroup>
						<ToolbarButton
							icon="thumbs-up"
							label={ __( 'success', 'gutenberg-block' )  }
							className={'alert alert-success'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'success' } ) }

						/>
						<ToolbarButton
							icon="warning"
							label={ __( 'Warning', 'gutenberg-block' )  }
							className={'alert alert-warning'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'warning' } ) }
						/>
						<ToolbarButton
							icon="dismiss"
							label={ __( 'danger', 'gutenberg-block' )  }
							className={'alert alert-danger'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'danger' } ) }
						/>
						<ToolbarButton
							icon=""
							label={ __( 'primary', 'gutenberg-block' )  }
							value={ attributes.type }
							className={'alert alert-primary'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'primary' } ) }
						/>
						<ToolbarButton
							icon=""
							label={ __( 'secondary', 'gutenberg-block' )  }
							className={'alert alert-secondary'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'secondary' } ) }
						/>
						<ToolbarButton
							icon=""
							label={ __( 'info', 'gutenberg-block' )  }
							className={'alert alert-info'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'info' } ) }
						/>
						<ToolbarButton
							icon=""
							label={ __( 'light', 'gutenberg-block' )  }
							className={'alert alert-light'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'light' } ) }
						/>
						<ToolbarButton
							icon=""
							label={ __( 'dark', 'gutenberg-block' )  }
							className={'alert alert-dark'} role="alert"
							onClick={ () => attributes.setAttributes( { type:'dark' } ) }
						/>
					</ToolbarGroup>
				</BlockControls>

				<RichText
					{ ...blockattributes }
					tagName="div" // Le bloc conteneur sera une div
					multiline="p" // chaque retour à la ligne créera un nouveau paragraphe
					onChange={ onChangeContent }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					value={ content }
					placeholder={ __( 'Entrez votre message.' ) }
					style={ { textAlign:align  } }
					className={"alertContent alert alert-" + type}
				/>
			</Fragment>
		</>
	);
}

