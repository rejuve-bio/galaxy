import argparse
import json
import os
import sys

from galaxy.files import ConfiguredFileSources


def get_file_sources(file_sources_path):
    assert os.path.exists(file_sources_path), f"file sources path [{file_sources_path}] does not exist"
    with open(file_sources_path) as f:
        file_sources_as_dict = json.load(f)
    file_sources = ConfiguredFileSources.from_dict(file_sources_as_dict)
    return file_sources


def check_for_duplicate_name(files_to_export):
    seen = set()
    duplicates = set()
    for entry in files_to_export:
        name = entry["staging_path"]
        if name in seen:
            duplica
            galaxy.fileses.add(name)
        seen.add(name)
    if duplicates:
        sys.exit(f"Duplicate export filenames given: {', '.join(duplicates)}, failing export")


def write_if_not_exists(file_sources, target_uri, real_data_path):
    file_source_path = file_sources.get_file_source_path(target_uri)
    if os.path.exists(file_source_path.path):
        print(f'Error: File "{file_source_path.path}" already exists. Skipping.')
        return 1
    file_source = file_source_path.file_source
    file_source.write_from(file_source_path.path, real_data_path)


def main(argv=None):
    # if argv is None:
    #     argv = sys.argv[1:]
    # args = _parser().parse_args(argv)
    # exit_code = 0
    # file_sources = get_file_sources(args.file_sources)
    # directory_uri = args.directory_uri
    # if not directory_uri.endswith("/"):
    #     directory_uri = f"{directory_uri}/"
    # export_metadata_files = args.export_metadata_files
    # with open(args.files_to_export) as f:
    #     files_to_export = json.load(f)
    # counter = 0
    # check_for_duplicate_name(files_to_export)
    # for entry in files_to_export:
    #     name = entry["staging_path"]
    #     real_data_path = entry["source_path"]
    #     target_uri = f"{directory_uri}{name}"
    #     if write_if_not_exists(file_sources, target_uri, real_data_path):
    #         exit_code = 1
    #     if export_metadata_files:
    #         metadata_files = entry.get("metadata_files", [])
    #         for metadata_file in metadata_files:
    #             metadata_file_uri = f"{directory_uri}{metadata_file['staging_path']}"
    #             if write_if_not_exists(file_sources, metadata_file_uri, metadata_file["source_path"]):
    #                 exit_code = 1
    #     counter += 1
    # print(f"{counter} out of {len(files_to_export)} files have been exported.\n")
    print(
        {
  "elements": {
    "nodes": [
      {
        "data": {
          "chr": "chr20",
          "end": "9839076",
          "gene_name": "PAK5",
          "gene_type": "protein_coding",
          "id": "gene ENSG00000101349",
          "source": "GENCODE",
          "source_url": "https://www.gencodegenes.org/human/",
          "start": "9537370",
          "synonyms": "p21CDKN1A-activated_kinase_7 PAK7 p21-activated_kinase_5 serine/threonine-protein_kinase_PAK7 PAK-7 serine/threonine-protein_kinase_PAK_7 p21_(RAC1)_activated_kinase_7 p21-activated_kinase_7 p21_protein_(Cdc42/Rac)-activated_kinase_7 protein_kinase_PAK5 serine/threonine-protein_kinase_PAK_5 p21_(RAC1)_activated_kinase_5 p21(CDKN1A)-activated_kinase_7 PAK5 PAK-5 HGNC:15916",
          "type": "gene"
        },
        "position": {
          "x": 560,
          "y": 50
        }
      },
      {
        "data": {
          "chr": "chr20",
          "end": "9839041",
          "gene_name": "PAK5",
          "id": "transcript ENST00000378429",
          "source": "GENCODE",
          "source_url": "https://www.gencodegenes.org/human/",
          "start": "9537389",
          "transcript_id": "ENST00000378429.3",
          "transcript_name": "PAK5-203",
          "transcript_type": "protein_coding",
          "type": "transcript"
        },
        "position": {
          "x": 180,
          "y": 216.66666666666669
        }
      },
      {
        "data": {
          "chr": "chr20",
          "end": "9838831",
          "gene_name": "PAK5",
          "id": "transcript ENST00000378423",
          "source": "GENCODE",
          "source_url": "https://www.gencodegenes.org/human/",
          "start": "9537389",
          "transcript_id": "ENST00000378423.5",
          "transcript_name": "PAK5-202",
          "transcript_type": "protein_coding",
          "type": "transcript"
        },
        "position": {
          "x": 560,
          "y": 216.66666666666669
        }
      },
      {
        "data": {
          "chr": "chr20",
          "end": "9839076",
          "gene_name": "PAK5",
          "id": "transcript ENST00000353224",
          "source": "GENCODE",
          "source_url": "https://www.gencodegenes.org/human/",
          "start": "9537370",
          "transcript_id": "ENST00000353224.10",
          "transcript_name": "PAK5-201",
          "transcript_type": "protein_coding",
          "type": "transcript"
        },
        "position": {
          "x": 940,
          "y": 216.66666666666669
        }
      }
    ],
    "edges": [
      {
        "data": {
          "id": "7093f0cf-d061-4e5b-8792-c1bc698bf890",
          "label": "transcribed_to",
          "source": "GENCODE",
          "source_node": "gene ENSG00000101349",
          "source_url": "https://www.gencodegenes.org/human/",
          "target_node": "transcript ENST00000378429"
        }
      },
      {
        "data": {
          "id": "1448f266-e398-4e2d-8f3a-04e2c8a4e6da",
          "label": "transcribed_to",
          "source": "GENCODE",
          "source_node": "gene ENSG00000101349",
          "source_url": "https://www.gencodegenes.org/human/",
          "target_node": "transcript ENST00000378423"
        }
      },
      {
        "data": {
          "id": "0b424b97-74a0-45de-b48f-090a844bea29",
          "label": "transcribed_to",
          "source": "GENCODE",
          "source_node": "gene ENSG00000101349",
          "source_url": "https://www.gencodegenes.org/human/",
          "target_node": "transcript ENST00000353224"
        }
      }
    ]
  }
}
    )
    sys.exit(exit_code)


def _parser():
    parser = argparse.ArgumentParser()
    parser.add_argument("--directory-uri", type=str, help="directory target URI")
    parser.add_argument("--file-sources", type=str, help="file sources json")
    parser.add_argument("--files-to-export", type=str, help="files to export")
    parser.add_argument("--export-metadata-files", type=bool, help="export metadata files", default=True)
    return parser


if __name__ == "__main__":
    main()
